function loadImage(url){
  return new Promise((resolve, reject) => {
    let image = new Image();

    image.onload = function(){
      resolve(image);
    }

    image.onerror = function(){
      reject(new Error('Could not load image'));
    }

    image.src = url;
  });
}

export default loadImage;
