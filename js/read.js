$(document).ready(function () {
  fetch('js/data.json')
    .then(response => response.json())
    .then(data => {
      data.forEach(element => {
        let div1 = $('<div><div>');
        $(div1).addClass('col-xl-3 col-lg-3 col-md-6 col-sm-12 text-center mt-2 mb-3');
        let div2 = $('<div><div>');
        $(div2).addClass('noPad container border border-white changeBorder');

        let a = $('<a></a>');
        $(a).attr('href', element.link);
        $(a).text(element.name);
        $(a).addClass('text-white block pt-3 pb-3');

        $(div2).append(a);
        $(div1).append(div2);

        $('#remember').append(div1);
      });
    })
    .catch(error => console.error(error));

  $('#btnWrite').click(function (e) {
    e.preventDefault();
    
  });
});