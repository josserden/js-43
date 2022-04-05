const profileContainer = document.querySelector('.js-profile-container');

export function showError(error) {
  console.error(error);

  profileContainer.innerHTML = `
  <div class="alert alert-danger d-flex justify-content-center align-items-center" role="alert">
  <span class="material-icons me-2"> error </span>
  Упс! Что-то пошло не так! Попробуйте еще раз позже.
</div>`;
}
