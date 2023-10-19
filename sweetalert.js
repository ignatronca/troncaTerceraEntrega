(async () => {
    const {value: pais} = await Swal.fire({
        title: 'bienvenido!',
        text: 'seleciona tu pais',
        icon:'question',
        confirmButtonText:'seleciona',
        footer: 'Esta es informacion importante!',
        padding: '1rem',
        backdrop:'true',
        input: 'select',
        inputPlaceholder: 'pais',
        inputValue: '',
        inputOptions: {
            Argentina: 'Argentina',
            España: 'España',
        }
    });

    if (pais){
        swal.fire({
            title:  `Selecionaste ${pais}`
        });
    }
       
    

 





})()