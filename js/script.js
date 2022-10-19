$(function(){

	
            $('.img').css('animation','acao 1s')
            $('.mostra').css('animation','acao 1s')
            $('.exibe').css('animation','acao 1s')
            $('.redes').css('animation','acao 1s')
   
   
    const dados = 
    [
        {img:'https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg'},
        {img:'https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg'},
        {img:'https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg'},
        
    ]

    dados.map((i)=>{
        $('.mostra').append(`
            <img src="${i.img} " />
        `)
    })

    const lista = 
    [
        {img:'https://static-cdn.jtvnw.net/jtv_user_pictures/9ce11a2b-ec84-44b1-9c76-b8d29df5fef0-profile_image-150x150.png', title:'Myk Brito'},
        {img:'https://static-cdn.jtvnw.net/jtv_user_pictures/15cec952-c1ba-4ff8-a79c-53c2fa5bd269-profile_image-150x150.png',title:'Alanzoka'},
        {img:'https://static-cdn.jtvnw.net/jtv_user_pictures/cb885149-f7f7-48f0-99ae-fe0a386ed3e2-profile_image-150x150.png',title:'Cellbit'},
        
    ]

    lista.map((i)=>{
        $('.exibe').append(`
            <img src="${i.img} " title="${i.title} " />
        `)
    })

    const redes =
    [
        {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR56qgrMdO3n5-k2jMA1Bp_0K8JZyXMXQ-UuOTASMZg-Zf4Xi3qIPiGTqDrpom8giNhiTM&usqp=CAU'},
        {img:'https://png.pngtree.com/png-clipart/20180506/ourmid/pngtree-twitter-icon-logo-png-image_3560523.png'},
        {img:'https://i.pinimg.com/736x/c9/d2/34/c9d2347a80a91b5147a578da2a4bbfae.jpg'},
        {img:'https://w7.pngwing.com/pngs/972/654/png-transparent-social-media-computer-icons-linkedin-social-networking-service-social-media-blue-company-text.png'},
    ]

    redes.map((i)=>{
        $('.redes').append(`
            <img src="${i.img} " />
        `)
    })

	

})