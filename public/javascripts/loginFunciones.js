/**
 * Created by seventrust on 02-01-17.
 */
$(document).ready(function () {
    $('#nuevoUsuario').click(function () {
        BootstrapDialog.show({
            title: 'Default Title',
            message: 'Click buttons below.',
            buttons: [{
                label: 'Message 1',
                action: function(dialog) {
                    dialog.setMessage('Message 1');
                }
            }, {
                label: 'Message 2',
                action: function(dialog) {
                    dialog.setMessage('Message 2');
                }
            }]
        });
    });

    $('#iniciarSesion').click(function () {
        var usuario = $('#username').val();
        var pass = $('#password').val();

        $.ajax({
            url: '/login',
            type: 'GET',
            data: {
                username: usuario,
                password: pass
            },
            beforeSend: function () {
                new PNotify({
                    title: 'Iniciando Sesion',
                    text: 'iniciando sesion, por favor espere',
                    type: 'info',
                    icon: 'fa fa-lock'
                });
            },
            success: function (data) {
                if(data == "1"){
                    window.load('/home')
                }
            }


        });
    })
});

