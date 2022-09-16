const d = document
d.addEventListener('click',e=>{
  if(e.target.matches('#overlay')){
    overlay.classList.add('hidden')
    avatar.classList.remove('open')
  }
  e.target.matches('#register__btn') ? e.target = register() : ''
})

let name = 0, mail = '', password = '', picture = '', avatar = d.querySelector('#avatar'), years = '', genderSelected = 'not supplied', birthdayText = ''
const image = d.createElement('img')

function register(){
  name = d.querySelector('#user').value
  name = name.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '')
  mail = d.querySelector('#mail').value
  password = d.querySelector('#password').value
  let birthday = age.value, birthdayArr = birthday.split("-"),birthdayDate = new Date(birthdayArr[0], birthdayArr[1] - 1, birthdayArr[2]), ageDifMs = Date.now() - birthdayDate.getTime(),ageDate = new Date(ageDifMs)
  years = Math.abs(ageDate.getUTCFullYear() - 1970)
  birthdayText = new Date(birthdayDate).toDateString()
  isNaN(years) ? years = 'not supplied' : years
  console.log(birthdayText)
  birthdayText == 'Invalid Date' ? birthdayText = 'not supplied' : birthdayText
  console.log(birthdayText)
  image.src === '' ? image.src = 'https://1.bp.blogspot.com/-Sf4wlivgnSg/YKFCiLHUpDI/AAAAAAAABr4/92ZVhueD8OYzSNec4suDysB9vlu7VafXwCLcBGAsYHQ/s170/Logo.webp' : image.src
  let genderRead = d.getElementsByName('gender')
  for(i=0; i<genderRead.length; i++){
    genderRead[i].checked ? genderSelected = genderRead[i].value : ''
  }
  name === '' || mail === '' || password === '' || years <= -0 || years >= 125 ? createError() : createProfile()
  overlay.classList.toggle('hidden')
  avatar.classList.add('open')
}
function createProfile() {
  let tags = `
  <h2>Profile</h2>
  <div id="content__avatar">
  <p>${name}</p>
  <img class="profile__img" title="Profile ${name}" height="150" loading="lazy" src="${image.src}" width="150"/>
  <p>Age ${years}</p>
  <p>Gender ${genderSelected}</p>
  <p>Birthday ${birthdayText}</p>
  </div>`
  avatar.innerHTML = tags
}
function createError() {
  let tags = `<p class="error">Fill in all the fields</p>`
  years <= -0 || years >= 125 ? tags = `<p class="error">Please enter a valid date</p>` : ''
  avatar.innerHTML = tags
}

picture = d.querySelector('#image')
const preview = d.querySelector('#preview')

picture.addEventListener('change', updateImageDisplay)
function updateImageDisplay() {
  while(preview.firstChild) {
    preview.removeChild(preview.firstChild)
  }

  const curFiles = picture.files
  if(curFiles.length !== 0) {
    for(const file of curFiles) {
      const para = d.createElement('p')
      if(validFileType(file)) {
        para.textContent = `File name ${file.name}, file size ${returnFileSize(file.size)}.`
        image.src = URL.createObjectURL(file)
        preview.appendChild(image)
        preview.appendChild(para)
      } else {
        para.textContent = `File name ${file.name}: Not a valid file type. Update your selection.`
        preview.appendChild(para)
      }
    }
  }
}

const fileTypes = ["image/apng","image/bmp","image/gif","image/jpeg","image/pjpeg","image/png","image/svg+xml","image/tiff","image/webp","image/x-icon"]
function validFileType(file) {return fileTypes.includes(file.type)}
function returnFileSize(number) {
  if(number < 1024) {
    return number + 'bytes';
  } else if(number >= 1024 && number < 1048576) {
    return (number/1024).toFixed(1) + 'KB'
  } else if(number >= 1048576) {
    return (number/1048576).toFixed(1) + 'MB'
  }
}