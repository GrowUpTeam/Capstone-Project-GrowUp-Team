package com.example.animalpedia

import android.content.Context
import android.graphics.Bitmap
import org.tensorflow.lite.DataType
import org.tensorflow.lite.support.tensorbuffer.TensorBuffer
import android.util.Log
import com.example.animalpedia.ml.TfliteModelFloat16

class TFLiteHelper(private val context: Context) {

    private lateinit var model: TfliteModelFloat16
    private val labels = listOf(
        "horse", "antelope", "sandpiper", "duck", "penguin", "goldfish", "koala", "squirrel", "pig", "badger",
        "fly", "swan", "ladybugs", "mouse", "hippopotamus", "lobster", "starfish", "crow", "eagle", "hamster",
        "elephant", "orangutan", "pigeon", "otter", "hyena", "bee", "okapi", "chimpanzee", "hedgehog", "goose",
        "flamingo", "lizard", "snake", "octopus", "seal", "coyote", "deer", "goat", "dragonfly", "hummingbird",
        "cat", "bat", "tiger", "moth", "cow", "hornbill", "jellyfish", "caterpillar", "fox", "cockroach",
        "crab", "rat", "pelecaniformes", "wombat", "leopard", "turkey", "raccoon", "panda", "bear", "squid",
        "hare", "zebra", "boar", "kangaroo", "shark", "parrot", "wolf", "oyster", "dog", "sparrow",
        "porcupine", "mosquito", "gorilla", "beetle", "donkey", "bison", "owl", "sheep", "butterfly",
        "reindeer", "whale", "seahorse", "dolphin", "grasshopper", "lion", "turtle", "possum", "rhinoceros", "woodpecker", "ox"
    )

    init {
        model = TfliteModelFloat16.newInstance(context)
    }

    fun classifyImage(bitmap: Bitmap): Pair<String, Float> {
        val resizedBitmap = Bitmap.createScaledBitmap(bitmap, 240, 240, true) // Asumsi ukuran input model adalah 240x240
        val byteBuffer = Utils.convertBitmapToByteBuffer(resizedBitmap)

        val inputFeature0 = TensorBuffer.createFixedSize(intArrayOf(1, 240, 240, 3), DataType.FLOAT32)
        inputFeature0.loadBuffer(byteBuffer)

        return try {
            val outputs = model.process(inputFeature0)
            val outputFeature0 = outputs.outputFeature0AsTensorBuffer

            val probabilities = outputFeature0.floatArray
            probabilities.forEachIndexed { index, probability ->
                Log.d("TFLiteHelper", "Label: ${labels[index]}, Probability: $probability")
            }
            val maxIndex = probabilities.indices.maxByOrNull { probabilities[it] } ?: -1
            Log.d("TFLiteHelper", "Max Index: $maxIndex, Label: ${labels[maxIndex]}, Probability: ${probabilities[maxIndex]}")

            Pair(labels[maxIndex], probabilities[maxIndex])
        } catch (e: Exception) {
            Log.e("TFLiteHelper", "Error during model processing", e)
            Pair("Unknown", 0.0f)
        }
    }

}