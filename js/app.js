var app = new Vue({
    el: '#app',
    data: {
      name: '',
      links: [
          {name: 'HOME'},
          {name: 'ABOUT'},
          {name: '', src: 'img/girl.png'},
          {name: 'GALLERY'},
          {name: 'CONTACT'},

      ],
      info: null,
      twitter: "",
      snapchat: "",
      instagram: "",
      email: "",
      firstName: "",

    },
    created() {
        fetch("https://hirng-x2021.glitch.me/api")
    .then(response => response.json())
    .then(data => {
        this.firstName = data.name.split(" ")[0];
        this.lastName = data.name.split(" ")[1];
        this.twitter= 'https://twitter.com/'+ data.social_media.twitter;
        this.snapchat= 'https://www.snapchat.com/add/' + data.social_media.snapchat;
        this.instagram = 'https://www.instagram.com/' + data.social_media.instagram;
        this.email= 'mailto:' + data.social_media.email;
        // console.log()
    });
    }
  })