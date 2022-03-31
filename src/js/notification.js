import Swal from 'sweetalert2';

export const showNotify = text => {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: text,
        showConfirmButton: false,
        timer: 1500,
        toast: true,
    });
};
