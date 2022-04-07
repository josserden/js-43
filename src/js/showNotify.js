import Swal from 'sweetalert2';

export const showNotify = (icon, title) => {
  Swal.fire({
    position: 'bottom-end',
    icon,
    title,
    showConfirmButton: false,
    timer: 3500,
    toast: true,
  });
};
