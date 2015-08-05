function createImagesPreviewer(selector, items) {
    var root = document.querySelector(selector);
    var fragment = document.createDocumentFragment();

    var imagePreviewer = document.createElement('div');
    imagePreviewer.style.display = 'inline-block';
    imagePreviewer.style.width = '75%';
    imagePreviewer.style.float = 'left';
    imagePreviewer.style.textAlign = 'center';
    var aside = document.createElement('div');
    aside.style.display = 'inline-block';
    aside.style.width = '25%';
    aside.style.textAlign = 'center';

    var selectedParent = document.createElement('div');
    selectedParent.classList.add('image-preview');
    var selectedImageHeader = document.createElement('h3');
    selectedImageHeader.innerText = items[0].title;
    var selectedImage = document.createElement('img');
    selectedImage.src = items[0].url;
    selectedImage.style.width = '80%';

    selectedParent.appendChild(selectedImageHeader);
    selectedParent.appendChild(selectedImage);
    imagePreviewer.appendChild(selectedParent);

    var input = document.createElement('input');
    var inputHeader = document.createElement('h3');
    inputHeader.innerHTML = 'Filter';
    input.addEventListener('keyup', function(ev) {
        var text = ev.target.value;
        var liChildren = listOfItems.getElementsByTagName('li');
        for (var i = 0, len = liChildren.length; i < len; i += 1) {
            var currentLi = liChildren[i];
            var header = currentLi.firstElementChild.innerText;
            console.log(header);
            if (header.toLowerCase().indexOf(text.toLowerCase()) >= 0) {
              currentLi.style.display = 'block';
            }else{
              currentLi.style.display = 'none';
            }

        };

    }, false);

    var listOfItems = document.createElement('ul');
    listOfItems.style.height = '500px';
    listOfItems.style.overflowY = 'scroll';
    listOfItems.style.listStyleType = 'none';
    listOfItems.addEventListener('click', function(ev) {
        var target = ev.target;

        // if (!(target instanceof HTMLImageElement)) {
        //     return;
        // }
        if (target.tagName === "IMG") {
            var header = target.previousElementSibling.innerText;
            var src = target.src;

            selectedImageHeader.innerHTML = header;
            selectedImage.src = src;
        }

    }, false);

    listOfItems.addEventListener('mouseover', function(ev) {
        var target = ev.target;
        console.log(target.className);
        if (target.tagName === 'IMG') {
            target.parentElement.style.backgroundColor = 'gray';
        }
    }, false);

    listOfItems.addEventListener('mouseout', function(ev) {
        var target = ev.target;
        // if (target.className.indexOf('image-container') < 0) {
        //     return;
        // }
        if (target.tagName === 'IMG') {
            target.parentElement.style.backgroundColor = '';
            target.parentElement.style.cursor = 'pointer';
        }
    }, false);


    var li = document.createElement('li');
    li.classList.add('image-container');
    var imageHeader = document.createElement('h3');
    var image = document.createElement('img');
    image.style.width = '90%';
    for (var i = 0, len = items.length; i < len; i++) {
        var currentItem = items[i];
        var currentLi = li.cloneNode(true);
        var currentImageHeader = imageHeader.cloneNode(true);
        currentImageHeader.innerHTML = currentItem.title;
        var currentImage = image.cloneNode(true);
        currentImage.src = currentItem.url;

        currentLi.appendChild(currentImageHeader);
        currentLi.appendChild(currentImage);

        listOfItems.appendChild(currentLi);
    };

    aside.appendChild(inputHeader);
    aside.appendChild(input);
    aside.appendChild(listOfItems);

    fragment.appendChild(imagePreviewer);
    fragment.appendChild(aside);

    root.appendChild(fragment);
}
