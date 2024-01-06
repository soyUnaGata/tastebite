<template>
  <div v-if="!$isMobile()" class="profile__section">
    <li class="profile dropdown d-flex flex-column">
      <div class="profile-link dropdown-item " aria-haspopup="true">
        <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30">
          <path class="account__icon"
            d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" />
        </svg>
      </div>

      <ul class="profile-menu dropdown-content scroll-list">
        <a href="/favorites">
          <li class="profile-menu__item">Favorites</li>
        </a>
      </ul>
    </li>
  </div>
  <div v-else class="profile__section">
    <a href="/favorites" class="profile-link dropdown-item " aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 512 512">
        <path
          d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
      </svg>
    </a>
  </div>
</template>


<style>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-item {
  cursor: pointer;
}

.dropdown-content {
  display: none;
  position: absolute;
  z-index: var(--for-profile);
  min-width: 160px;
  top: 35px;
  cursor: pointer;
  max-height: 250px;
}

.dropdown-content li {
  color: var(--primary);
  padding: 12px 16px;
  display: block;
}

.dropdown:hover,
.dropdown:focus,
.dropdown:active .dropdown-content {
  display: block;
}

.dropdown:hover,
.dropdown:focus,
.dropdown:active .dropdown-item {
  fill: var(--secondary);
}

.dropdown-content li:hover {
  background-color: var(--secondary);
  color: var(--white);
  width: 100%;
}

@media (max-width: 992px) {
  .dropdown-content {
    transform: translateX(-30%);
    min-width: 100px;
    top: 40px;
  }

  .profile__section {
    align-items: center;
    display: flex;
  }
}

@media (min-width: 280px) and (max-width: 375px) {
  .profile__section {
    display: none;
  }
}
</style>


