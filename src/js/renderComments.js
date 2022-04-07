import { dateFormat } from './helpers/dateFormat';

export function renderComments(comments, container) {
  const markup = comments
    .map(
      ({ createdAt, content, author, avatar, thumbsUp, thumbsDown }) => `
  <div class="col-md-8 mx-auto">
      <div class="media g-mb-30 media-comment">
        <img
          class="d-flex g-width-50 g-height-50 rounded-circle g-mt-3 g-mr-15"
          src="${avatar}"
          alt="${author}"
        />
        <div class="media-body u-shadow-v18 g-bg-secondary g-pa-30 rounded">
          <div class="g-mb-15">
            <h5 class="h5 g-color-gray-dark-v1 mb-0">${author}</h5>
            <span class="g-color-gray-dark-v4 g-font-size-12">${dateFormat(createdAt)}</span>
          </div>

          <p>
            ${content}
          </p>

          <ul class="list-inline d-sm-flex my-0">
            <li class="list-inline-item g-mr-20 me-3">
              <a
                class="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover d-flex align-items-center text-decoration-none"
                href="#!"
              >
                <span class="material-icons-round g-pos-rel g-top-1 g-mr-3 me-1"> thumb_up </span>
                ${thumbsUp}
              </a>
            </li>
            <li class="list-inline-item g-mr-20">
              <a
                class="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover d-flex align-items-center text-decoration-none"
                href="#!"
              >
                <span class="material-icons-round g-pos-rel g-top-1 g-mr-3 me-1"> thumb_down </span>
                ${thumbsDown}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  `,
    )
    .join('');

  container.insertAdjacentHTML('beforeend', markup);
}
