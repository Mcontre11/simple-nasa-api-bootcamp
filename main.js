document.querySelector("#button").addEventListener("click", nasa)

function nasa() {
  let date = document.querySelector('input')
  let htmlImage = document.querySelector('#nasaImage')
  let explanation = document.querySelector('#infoFromNasa')
  let nasaPageTitle = document.querySelector('#title')
  let video = document.querySelector('#nasaVideo')
  
  const url = ('https://api.nasa.gov/planetary/apod?api_key= + date.value)


  fetch(url)
    .then(res => res.json()) // parse response as JSON 
    .then(dataFromNasa => {
      // console.log('this is the dataFromNasa variable;', dataFromNasa);
      // console.log('this is the dataFromNasa.code variable;', dataFromNasa.code);
      if (dataFromNasa.code == 400) {
        let errorMessage = 'ERROR   ' + dataFromNasa.msg
        alert(errorMessage)
        // else is changingn the html attribute to the dataFromNasa given by nasa
      } else if(dataFromNasa.media_type=='video'){
        video.src=dataFromNasa.url
        htmlImage.classList.add('hide')
        explanation.innerText = dataFromNasa.explanation
        nasaPageTitle.innerText = dataFromNasa.title
        video.classList.remove('hide')
      }
      else {
        htmlImage.src=dataFromNasa.url
        video.classList.add('hide')
        explanation.innerText = dataFromNasa.explanation
        nasaPageTitle.innerText = dataFromNasa.title
        htmlImage.classList.remove('hide')

      }
    })

  
     .catch(err => {
       console.log(`error ${err}`);
     });
  }
// this was started by me and finished with some assistance from a mentor because I had a 400 web browser issue. 
