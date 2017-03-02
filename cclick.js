/**
 * Copyright (c) 2016 futuri
 * License: GPL version 3
 * GitHub: https://github.com/futuri/cclick
 * Description: click constante
**/

var cclick = {
    intervalo:0,
    estado:0,
    init:function (argument,callback) {
        cclick.events(argument,callback);
    },
    events:function (argument,callback) {
        argument.addEventListener('mousedown',function (e) {
            intervalo = setInterval(function (argument) {
                if (cclick.estado===0) {
                    cclick.estado=1;
                    callback();
                }
            }, 300);
            console.log("mousedown")
        });

        argument.addEventListener('mouseup',function (e) {
            clearInterval(intervalo);
            cclick.estado=0;
            console.log("mouseup");
        });
    }
};

cclick.init(document.querySelectorAll('button')[0],function() {
    console.log('SE EJECUTA FUNCION');
});