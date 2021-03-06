var perfilOcultoAcci = $("#pAccionOculto").val();
$(".tablaAcciones").DataTable({
    ajax: "util/datatable-acciones.php?perfilOcultoAcci="+perfilOcultoAcci,
    deferRender: true,
    retrieve: true,
    processing: true,
    paging: true,
    lengthChange: true,
    searching: true,
    ordering: true,
    order: [
        [0, "asc"]
    ],
    info: true,
    autoWidth: false,
    language: {
        url: "views/dist/js/dataTables.spanish.lang",
    },
});
// Editar Accion realizada
$(".tablaAcciones tbody").on("click", ".btnEditarAccion", function () {
    var idAccion = $(this).attr("idAccion");
    var datos = new FormData();

    datos.append("idAccion", idAccion);
    $.ajax({
        url: "lib/ajaxAcciones.php",
        method: "POST",
        data: datos,
        cache: false,
        contentType: false,
        processData: false,
        dataType: "json",
        success: function (respuesta) {
            $("#edtAccion").val(respuesta["accionrealizada"]);
            $("#idAccion").val(respuesta["idAccion"]);
            $("#edtacDiag").val(respuesta["segment"]);
            $("#edtacDiag").html(respuesta["descSegmento"]);
            $("#nSeg2").val(respuesta["segment"]);
            $("#accAnt").val(respuesta["accionrealizada"]);
        },
    });
});
// Validar accion
$("#newAccion").focusout(function () {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500
    });
    var categoria = $("#acDiag").val();
    var accion = $(this).val();
    var datos = new FormData();
    datos.append("validarAccion", accion);
    datos.append("validarCategoria", categoria);
    $.ajax({
        url: "lib/ajaxAcciones.php",
        method: "POST",
        data: datos,
        cache: false,
        contentType: false,
        processData: false,
        dataType: "json",
        success: function (respuesta) {
            if (respuesta) {
                Toast.fire({
                    icon: 'warning',
                    title: 'La acci??n ingresada ya existe para el segmento'
                });
                $("#newAccion").val("");
                $("#newAccion").focus();
            }
        }
    });
});

$("#newAccion").keydown(function () {
    var diag = $(this).val();
    var rechange1 = capitalizeFirstLetter(diag);
    $("#newAccion").val(rechange1);
});
$("#edtAccion").focusout(function () {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500
    });
    var categoria2 = $("#edtacDiag2").val();
    var abcSeg = $("#nSeg2").val();
    var bcAcci = $("#accAnt").val();
    var accion = $(this).val();

    if (accion != "" && categoria2 != 0) {
        if (categoria2 != abcSeg && accion != bcAcci) {
            var datos = new FormData();
            datos.append("validarAccion", accion);
            datos.append("validarCategoria", categoria2);
            $.ajax({
                url: "lib/ajaxAcciones.php",
                method: "POST",
                data: datos,
                cache: false,
                contentType: false,
                processData: false,
                dataType: "json",
                success: function (respuesta) {
                    if (respuesta) {
                        Toast.fire({
                            icon: 'warning',
                            title: 'La acci??n ingresada ya existe para el segmento'
                        });
                        $("#edtAccion").val("");
                        $("#edtAccion").focus();
                    }
                }
            });
        }
        else if (categoria2 == abcSeg && accion != bcAcci) {
            var datos = new FormData();
            datos.append("validarAccion", accion);
            datos.append("validarCategoria", categoria2);
            $.ajax({
                url: "lib/ajaxAcciones.php",
                method: "POST",
                data: datos,
                cache: false,
                contentType: false,
                processData: false,
                dataType: "json",
                success: function (respuesta) {
                    if (respuesta) {
                        Toast.fire({
                            icon: 'warning',
                            title: 'La acci??n ingresada ya existe para el segmento'
                        });
                        $("#edtAccion").val("");
                        $("#edtAccion").focus();
                    }
                }
            });
        }
        else if (categoria2 != abcSeg && accion == bcAcci) {
            var datos = new FormData();
            datos.append("validarAccion", accion);
            datos.append("validarCategoria", categoria2);
            $.ajax({
                url: "lib/ajaxAcciones.php",
                method: "POST",
                data: datos,
                cache: false,
                contentType: false,
                processData: false,
                dataType: "json",
                success: function (respuesta) {
                    if (respuesta) {
                        Toast.fire({
                            icon: 'warning',
                            title: 'La acci??n ingresada ya existe para el segmento'
                        });
                        $("#edtAccion").val("");
                        $("#edtAccion").focus();
                    }
                }
            });
        }
    }
});
$("#edtAccion").keydown(function () {
    var diag = $(this).val();
    var rechange1 = capitalizeFirstLetter(diag);
    $("#edtAccion").val(rechange1);
});
// Validar accion
// Editar Accion realizada

// Eliminar accion realizada
$(".tablaAcciones tbody").on("click", ".btnEliminarAccion", function () {
    var idAccion = $(this).attr("idAccion");
    Swal.fire({
        title: '??Est?? seguro de eliminar la acci??n seleccionada?',
        text: "??Si no lo est??, puede cancelar la acci??n!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#343a40',
        cancelButtonText: 'Cancelar',
        cancelButtonColor: '#d33',
        confirmButtonText: '??S??, eliminar acci??n!'
    }).then(function (result) {
        if (result.value) {
            window.location = "index.php?ruta=acciones&idAccion=" + idAccion;
        }
    });
});
// Eliminar accion realizada
$("#newAccion").keyup(function () {
    this.value = (this.value + "").replace(/[^a-zA-Z0-9???????????????????????????? ]/g, "");
});
$("#edtAccion").keyup(function () {
    this.value = (this.value + "").replace(/[^a-zA-Z0-9???????????????????????????? ]/g, "");
});
// Validaci??n de campos
$("#btnRegAcc").on("click", function () {
    $("#formRegAcc").validate({
        rules: {
            acDiag: {
                valueNotEquals: "0",
                required: true,
            },
            newAccion: {
                required: true,
            },
        },
        messages: {
            acDiag: {
                valueNotEquals: "Selecciona Segmento",
                required: true,
            },
            newAccion: {
                required: "Ingrese acci??n realizada",
            },
        },
        errorElement: "span",
        errorPlacement: function (error, element) {
            error.addClass("invalid-feedback");
            element.closest(".form-group").append(error);
        },
        highlight: function (element, errorClass, validClass) {
            $(element).addClass("is-invalid");
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).removeClass("is-invalid");
        },
    });
});
$("#btnEdtAcc").on("click", function () {
    $("#formEdtAcc").validate({
        rules: {
            edtacDiag: {
                valueNotEquals: "0",
                required: true,
            },
            edtAccion: {
                required: true,
            },
        },
        messages: {
            edtacDiag: {
                valueNotEquals: "Selecciona Segmento",
                required: true,
            },
            edtAccion: {
                required: "Ingrese acci??n realizada",
            },
        },
        errorElement: "span",
        errorPlacement: function (error, element) {
            error.addClass("invalid-feedback");
            element.closest(".form-group").append(error);
        },
        highlight: function (element, errorClass, validClass) {
            $(element).addClass("is-invalid");
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).removeClass("is-invalid");
        },
    });
});
// Validaci??n de campos