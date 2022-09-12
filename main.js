var listaFilmes = [
    "https://m.media-amazon.com/images/I/514M+qMYWSL.jpg",
    "https://s2.glbimg.com/lGkDRaKhAchaGJ3f_5lyghR9oMM=/0x0:1966x3000/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_63b422c2caee4269b8b34177e8876b93/internal_photos/bs/2022/f/Y/zmCbucToOybdKyPxADqA/star.jpg"
]

listaFilmes.push("https://kbimages1-a.akamaihd.net/f5e2b97b-0438-4cd5-8a47-09c26b3fb4cf/353/569/90/False/harry-potter-and-the-prisoner-of-azkaban-5.jpg")

for (var i = 0; i < listaFilmes.length; i++){
    document.write("<img src=" + listaFilmes[i] + ">")
}