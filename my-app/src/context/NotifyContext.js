import React, { createContext } from "react";

export const NotifyContext = createContext()

    const NotifyContextProvider = ({children}) => {
        //State


       



        //Function
        const toast = ({
            title = 'Success nè ',
            message = '123 test',
            kind = 'info',
            duration = 3000
        
        }) => {
            const main = document.getElementById('toast');
            if (main) {
                const toast = document.createElement('div')
                
                //Auto remove
                const autoRemoveId = setTimeout(function() {
                    main.removeChild(toast)
                },duration + 2000)

                
        
                toast.onclick = function (e) {
                    if (e.target.closest('.toast__close')){
                        main.removeChild(toast);
                        clearTimeout(autoRemoveId);
                    }
                }
        
                let typed = `toast--${kind}`;
        
                const icons = {
                    success: 'fas fa-check-circle',
                    info: 'fas fa-info-circle',
                    warning: 'fas fa-exclamation-circle',
                    error: 'fas fa-exclamation-circle'
                };
                const icon = icons[kind];
        
                const delay = (duration/1000).toFixed(2);
                
        
                toast.classList.add('toast', typed);
        
                toast.style.animation = `slideInLeft ease 0.5s , fadeOutt linear 5s 9s forwards`;

                // toast.style.animation = `fadeOutt linear 2s 5s forwards`;
        
                toast.innerHTML = `
                    <div class ="toast__icon">
                    <i class="${icon}"></i>
                    </div>
                    <div class = "toast__body">
                    <h3 class ="toast__title">${title}</h3>
                    <p class = "toast__msg">${message}</p>
                    </div>
        
                    <div class= "toast__close">
                        <i class="fas fa-times"></i>
                    </div>
               `;
                main.appendChild(toast);
        
                
            }
        }

        


        const notifyContextData = {
            toast
        }


        //Return provider
        return(
            <NotifyContext.Provider value={notifyContextData}>
                    {children}
            </NotifyContext.Provider>
        )

    }

    

export default NotifyContextProvider