 $(document).ready(function() {
           $("#fone").inputmask({
             mask: ["(99) 9999-9999", "(99) 99999-9999", ],
             keepStatic: true
           });
         });
           
          
          
          
          $(document).ready(function() {
    $('#form_lead').bootstrapValidator({
        feedbackIcons: {
            valid: 'fa fa-check',
            invalid: 'fa fa-times',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            nome: {
                validators: {
                        stringLength: {
                        min: 2,
                        message: 'Por favor preencha este campo'
                    },
                    notEmpty: {
                        message: 'Por favor preencha este campo'
                    }   
                }
            },
             email: {
                validators: {
                    emailAddress: {
                        message: 'Por favor informe um email válido'
                    },
                    notEmpty: {
                        message: 'Por favor preencha este campo'
                    }   
                }
            },
            telefone: {
                validators: {
                    stringLength: {
                        min: 6,
                        message: 'Por favor preencha este campo'
                    },
                    notEmpty: {
                        message: 'Por favor preencha este campo'
                    }                    
                }
            },
            site: {
                validators: {
                    uri: {
                            message: 'Site inválido'
                        },
                    notEmpty: {
                        message: 'Por favor preencha este campo'
                    }   
                    }
                },
            empresa: {
                validators: {
                    stringLength: {
                        min: 2,
                        message: 'Por favor preencha este campo'
                    },
                    notEmpty: {
                        message: 'Por favor preencha este campo'
                    }
                }
            },
            empresa: {
                validators: {
                    stringLength: {
                        min: 2,
                        message: 'Por favor preencha este campo'
                    },
                    notEmpty: {
                        message: 'Por favor preencha este campo'
                    }
                }
            },
            cargo: {
                validators: {
                    notEmpty: {
                        message: 'Por favor selecione uma alternativa'
                    }
                }
            },
            area: {
                validators: {
                    notEmpty: {
                        message: 'Por favor selecione uma alternativa'
                    }
                }
            },
            numeroFun: {
                validators: {
                    notEmpty: {
                        message: 'Por favor selecione uma alternativa'
                    }
                }
            }
            }
        })
        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // submit desativado
                $('#form_lead').data('bootstrapValidator').resetForm();

            e.preventDefault();

            var $form = $(e.target);

            var bv = $form.data('bootstrapValidator');

            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });
});