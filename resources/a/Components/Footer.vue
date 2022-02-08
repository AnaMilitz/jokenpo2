<template>
    <footer id="footer">
        <div id="footer-btns">
            <span><router-link to="/privacy"> Política de privacidade </router-link></span>
            <span class="span-dot">●</span>
            <span><router-link to="/terms"> Termos de uso </router-link></span>
            <span class="span-dot">●</span>
            <span><router-link to="/contact"> Contatos </router-link></span>
            <span class="span-dot">●</span>
        </div>
        <div class='social-media'>
            <a href="https://www.instagram.com/ufsm.br/" target="_blank"><img src="..\..\img\comp_footer\instagram.png"/></a>
            <a href="https://pt-br.facebook.com/UFSM.BR/" target="_blank"><img src="..\..\img\comp_footer\facebook.png"/></a>
            <a href="https://twitter.com/ufsm_oficial" target="_blank"><img src="..\..\img\comp_footer\twitter.png"/></a>
            <a href="https://www.youtube.com/channel/UC0U4Kuznv0YtRzULknjaZ2w" target="_blank"><img src="..\..\img\comp_footer\youtube.png"/></a>
            <a href="https://www.linkedin.com/school/ufsm/" target="_blank"><img src="..\..\img\comp_footer\linkedin.png"/></a>        
        </div>
    </footer>
</template>

<script>
export default{
    name: "Footer"
}
</script>

<style>
#footer
{
    padding: 20px 0;
    min-height: 80px;
    height: fit-content;
    background-color: var(--main-color);
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}
#footer-btns{
    margin-left: 30px;
    color: #FFFFFF;
    position: relative;
    float: left;
}
#footer-btns > span > a
{
    padding: 0px 20px;
    transition: 0.25s 0s ease;
}
#footer-btns > span > a:hover
{
    color: rgb(182, 182, 182);
}
.social-media{
    display: flex;
    justify-content: right;
    align-items: center;
    width: 200px;
    margin-right: 50px;
}
.social-media > a{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
}
.social-media > a > img{
    height: 18px;
}

@media(max-width: 860px){
    #footer-btns{
        margin-left: 10px;
        display: flex;
        flex-flow: column;
        gap: 10px;
    }
    .span-dot{
        display: none;
    }
    .social-media{
        max-width: 100px;
        max-height: 76px;
        margin-right: 10px;
        gap: 10px 0;
        flex-flow: column;
        flex-wrap: wrap;
    }
}
</style>