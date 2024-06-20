const tf = require('@tensorflow/tfjs-node');

async function predictClassification(model, imageBuffer) {
    let tensor;
    try {
        tensor = tf.node.decodeImage(imageBuffer, 3)
            .resizeNearestNeighbor([240, 240]) //ukuran gambar prediksi
            .expandDims()
            .toFloat()
            .div(tf.scalar(255.0));

        console.log('Tensor shape:', tensor.shape);
    } catch (error) {
        throw new Error('Invalid image format. Please upload JPEG, PNG, GIF, or BMP file.');
    }

    const prediction = model.predict(tensor);
    const score = await prediction.data();
    console.log('Prediction scores:', score);

    const confidenceScore = Math.max(...score) * 100;

    const classes = ['antelope', 'badger', 'bat', 'bear', 'bee', 'beetle', 'bison', 'boar', 'butterfly', 'cat', 'caterpillar', 'chimpanzee', 'cockroach', 'cow', 'coyote', 'crab', 'crow', 'deer', 'dog', 'dolphin', 'donkey', 'dragonfly', 'duck', 'eagle', 'elephant', 'flamingo', 'fly', 'fox', 'goat', 'goldfish', 'goose', 'gorilla', 'grasshopper', 'hamster', 'hare', 'hedgehog', 'hippopotamus', 'hornbill', 'horse', 'hummingbird', 'hyena', 'jellyfish', 'kangaroo', 'koala', 'ladybugs', 'leopard', 'lion', 'lizard', 'lobster', 'mosquito', 'moth', 'mouse', 'octopus', 'okapi', 'orangutan', 'otter', 'owl', 'ox', 'oyster', 'panda', 'parrot', 'pelecaniformes', 'penguin', 'pig', 'pigeon', 'porcupine', 'possum', 'raccoon', 'rat', 'reindeer', 'rhinoceros', 'sandpiper', 'seahorse', 'seal', 'shark', 'sheep', 'snake', 'sparrow', 'squid', 'squirrel', 'starfish', 'swan', 'tiger', 'turkey', 'turtle', 'whale', 'wolf', 'wombat', 'woodpecker', 'zebra','human','none'];
// class 90 anjay
    const classResult = tf.argMax(prediction, 1).dataSync()[0];
    const label = classes[classResult];

    let id;

    //heart == pembanding 
    //label == hasil ml yang berbentuk text
    //id 
    if (label === 'antelope') {
        id = 1;
    } else if (label === 'badger') {
        id = 2;
    } else if (label === 'bat') {
        id = 3;
    } else if (label === 'bear') {
        id = 4;
    } else if (label === 'bee') {
        id = 5;
    } else if (label === 'beetle') {
        id = 6;
    } else if (label === 'bison') {
        id = 7;
    } else if (label === 'boar') {
        id = 8;
    } else if (label === 'butterfly') {
        id = 9;
    } else if (label === 'cat') {
        id = 10;
    } else if (label === 'caterpillar') {
        id = 11;
    } else if (label === 'chimpanzee') {
        id = 12;
    } else if (label === 'cockroach') {
        id = 13;
    } else if (label === 'cow') {
        id = 14;
    } else if (label === 'coyote') {
        id = 15;
    } else if (label === 'crab') {
        id = 16;
    } else if (label === 'crow') {
        id = 17;
    } else if (label === 'deer') {
        id = 18;
    } else if (label === 'dog') {
        id = 19;
    } else if (label === 'dolphin') {
        id = 20;
    } else if (label === 'donkey') {
        id = 21;
    } else if (label === 'dragonfly') {
        id = 22;
    } else if (label === 'duck') {
        id = 23;
    } else if (label === 'eagle') {
        id = 24;
    } else if (label === 'elephant') {
        id = 25;
    } else if (label === 'flamingo') {
        id = 26;
    } else if (label === 'fly') {
        id = 27;
    } else if (label === 'fox') {
        id = 28;
    } else if (label === 'goat') {
        id = 29;
    } else if (label === 'goldfish') {
        id = 30;
    } else if (label === 'goose') {
        id = 31;
    } else if (label === 'gorilla') {
        id = 32;
    } else if (label === 'grasshopper') {
        id = 33;
    } else if (label === 'hamster') {
        id = 34;
    } else if (label === 'hare') {
        id = 35;
    } else if (label === 'hedgehog') {
        id = 36;
    } else if (label === 'hippopotamus') {
        id = 37;
    } else if (label === 'hornbill') {
        id = 38;
    } else if (label === 'horse') {
        id = 39;
    } else if (label === 'hummingbird') {
        id = 40;
    } else if (label === 'hyena') {
        id = 41;
    } else if (label === 'jellyfish') {
        id = 42;
    } else if (label === 'kangaroo') {
        id = 43;
    } else if (label === 'koala') {
        id = 44;
    } else if (label === 'ladybugs') {
        id = 45;
    } else if (label === 'leopard') {
        id = 46;
    } else if (label === 'lion') {
        id = 47;
    } else if (label === 'lizard') {
        id = 48;
    } else if (label === 'lobster') {
        id = 49;
    } else if (label === 'mosquito') {
        id = 50;
    } else if (label === 'moth') {
        id = 51;
    } else if (label === 'mouse') {
        id = 52;
    } else if (label === 'octopus') {
        id = 53;
    } else if (label === 'okapi') {
        id = 54;
    } else if (label === 'orangutan') {
        id = 55;
    } else if (label === 'otter') {
        id = 56;
    } else if (label === 'owl') {
        id = 57;
    } else if (label === 'ox') {
        id = 58;
    } else if (label === 'oyster') {
        id = 59;
    } else if (label === 'panda') {
        id = 60;
    } else if (label === 'parrot') {
        id = 61;
    } else if (label === 'pelecaniformes') {
        id = 62;
    } else if (label === 'penguin') {
        id = 63;
    } else if (label === 'pig') {
        id = 64;
    } else if (label === 'pigeon') {
        id = 65;
    } else if (label === 'porcupine') {
        id = 66;
    } else if (label === 'possum') {
        id = 67;
    } else if (label === 'raccoon') {
        id = 68;
    } else if (label === 'rat') {
        id = 69;
    } else if (label === 'reindeer') {
        id = 70;
    } else if (label === 'rhinoceros') {
        id = 71;
    } else if (label === 'sandpiper') {
        id = 72;
    } else if (label === 'seahorse') {
        id = 73;
    } else if (label === 'seal') {
        id = 74;
    } else if (label === 'shark') {
        id = 75;
    } else if (label === 'sheep') {
        id = 76;
    } else if (label === 'snake') {
        id = 77;
    } else if (label === 'sparrow') {
        id = 78;
    } else if (label === 'squid') {
        id = 79;
    } else if (label === 'squirrel') {
        id = 80;
    } else if (label === 'starfish') {
        id = 81;
    } else if (label === 'swan') {
        id = 82;
    } else if (label === 'tiger') {
        id = 83;
    } else if (label === 'turkey') {
        id = 84;
    } else if (label === 'turtle') {
        id = 85;
    } else if (label === 'whale') {
        id = 86;
    } else if (label === 'wolf') {
        id = 87;
    } else if (label === 'wombat') {
        id = 88;
    } else if (label === 'woodpecker') {
        id = 89;
    } else if (label === 'zebra') {
        id = 90;
    } else if (label === 'human') {
        id = 91;
    } else if (label === 'none') {
        id = 92;
    }
    
    else {
        // Handle the case when label doesn't match any of the specified animals
        id = -1; // or any other default value
    }
    

    return { confidenceScore, label, id };
}

module.exports = predictClassification;