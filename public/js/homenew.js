var width = screen.width;

const comments = document.querySelectorAll("#comment");
var commentsArea = document.querySelectorAll("#commentArea");
var addComments = document.querySelectorAll("#commentPortion");

comments.forEach(function (el, i) {
    el.addEventListener('click', function (e) { 

            if (addComments[i].style.display == 'none')
                addComments[i].style.display = 'block';
            else if (addComments[i].style.display == 'block')
                addComments[i].style.display = 'none';
            commentsArea[i].focus();
        });
});

function remove(n) {
    var elem = document.getElementById('consign' + n);
    elem.parentNode.removeChild(elem);
    return false;
}
