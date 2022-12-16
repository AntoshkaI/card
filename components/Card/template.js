export default {
    render(data){
        return `
            ${this.css()}
            ${this.html(data)}
        `
    },
    html(data){
        return `
            <div class="dream-card">
            <div class="dream-card__logo"><i class="fa-brands fa-discord"></i></i></div>
            <div class="dream-card__user">
                   ${data.user}
            </div>
            <div class="dream-card__info">
               
                <div class="dream-card__prof">
                ${data.prof}
                </div>
                <div class="dream-card__mail">
                ${data.mail}
                </div>
                <div class="dream-card__number">
                ${data.tel}
                </div> 
            </div>  
             

            
        </div>
        `;
    },
    css(){
        return `
            <style>
            @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css");
                .dream-card{
                    width: 85.6mm;
                    height: 53.98mm;
                    border-radius: 3mm;
                    box-sizing: border-box;
                    padding: 10mm;
                    background: rgb(238,174,202);
                    background: -webkit-linear-gradient(to right, #bdc3c7, #2c3e50);
                    background: linear-gradient(to right, #bdc3c7, #2c3e50);
                    align-content: space-between;
                    font-size: 16pt;
                    font-family: sans-serif;
                }
              
                .dream-card__logo {
                    font-size: 30px;
                    margin-top: 2px;


                }
                .dream-card__number {
                    display: flex;
                    justify-content: space-between;
                }
            
                .dream-card__user{
                    dream-card__user {
                        align-self: flex-end;
                    }
        </style>
        `
    }
}