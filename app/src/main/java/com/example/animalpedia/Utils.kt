package com.example.animalpedia

import android.util.Log
import android.graphics.Bitmap
import java.nio.ByteBuffer
import java.nio.ByteOrder

object Utils {
    fun convertBitmapToByteBuffer(bitmap: Bitmap): ByteBuffer {
        val height = bitmap.height
        val width = bitmap.width
        Log.d("Utils", "Original image size: Width = $width, Height = $height")

        // Resize the bitmap if necessary
        val size = 240
        val resizedBitmap = if (bitmap.width != size || bitmap.height != size) {
            Bitmap.createScaledBitmap(bitmap, size, size, true).also {
                Log.d("Utils", "Resized image to: Width = ${it.width}, Height = ${it.height}")
            }
        } else {
            bitmap.also {
                Log.d("Utils", "Image size is already: Width = ${it.width}, Height = ${it.height}")
            }
        }

        // Allocate the buffer
        val byteBuffer = ByteBuffer.allocateDirect(1 * size * size * 3 * 4)
        byteBuffer.order(ByteOrder.nativeOrder())
        val intValues = IntArray(size * size)
        resizedBitmap.getPixels(intValues, 0, size, 0, 0, size, size)
        var pixel = 0
        for (i in 0 until size) {
            for (j in 0 until size) {
                val value = intValues[pixel++]
                byteBuffer.putFloat((value shr 16 and 0xFF) / 255.0f)
                byteBuffer.putFloat((value shr 8 and 0xFF) / 255.0f)
                byteBuffer.putFloat((value and 0xFF) / 255.0f)
            }
        }
        return byteBuffer
    }
}