<template>
  <!-- Introduction -->
  <section class="mb-8 py-20 text-white text-center relative">
    <div class="absolute inset-0 w-full h-full bg-contain introduction-bg z-1"></div>
    <div class="container relative mx-auto z-10">
      <div class="text-white main-header-content">
        <h1 class="font-bold text-5xl mb-5">{{ $t('home.listen') }}</h1>
        <p>{{ $n(1, 'currency', 'fr') }}</p>
        <p class="w-full md:w-8/12 mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et dolor mollis, congue
          augue non, venenatis elit. Nunc justo eros, suscipit ac aliquet imperdiet, venenatis et
          sapien. Duis sed magna pulvinar, fringilla lorem eget, ullamcorper urna.
        </p>
      </div>
    </div>

    <img
      class="relative block mx-auto mt-5 -mb-20 w-auto max-w-full z-10"
      src="/assets/img/introduction-music.png"
    />
  </section>

  <!-- Main Content -->
  <section class="container mx-auto">
    <div class="bg-white rounded border border-gray-200 relative flex flex-col">
      <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200" v-icon="'headphones-alt'">
        <span class="card-title">Songs</span>
        <!-- Icon -->
      </div>
      <!-- Playlist -->
      <ol id="playlist">
        <li
          class="flex justify-between items-center p-3 pl-6 cursor-pointer transition duration-300 hover:bg-gray-50"
        >
          <div>
            <a href="#" class="font-bold block text-gray-600">Song Title</a>
            <span class="text-gray-500 text-sm">Artist Name</span>
          </div>

          <div class="text-gray-600 text-lg">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li
          class="flex justify-between items-center p-3 pl-6 cursor-pointer transition duration-300 hover:bg-gray-50"
        >
          <div>
            <a href="#" class="font-bold block text-gray-600">Song Title</a>
            <span class="text-gray-500 text-sm">Artist Name</span>
          </div>

          <div class="text-gray-600 text-lg">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li
          class="flex justify-between items-center p-3 pl-6 cursor-pointer transition duration-300 hover:bg-gray-50"
        >
          <div>
            <a href="#" class="font-bold block text-gray-600">Song Title</a>
            <span class="text-gray-500 text-sm">Artist Name</span>
          </div>

          <div class="text-gray-600 text-lg">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li
          class="flex justify-between items-center p-3 pl-6 cursor-pointer transition duration-300 hover:bg-gray-50"
        >
          <div>
            <a href="#" class="font-bold block text-gray-600">Song Title</a>
            <span class="text-gray-500 text-sm">Artist Name</span>
          </div>

          <div class="text-gray-600 text-lg">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li
          class="flex justify-between items-center p-3 pl-6 cursor-pointer transition duration-300 hover:bg-gray-50"
        >
          <div>
            <a href="#" class="font-bold block text-gray-600">Song Title</a>
            <span class="text-gray-500 text-sm">Artist Name</span>
          </div>

          <div class="text-gray-600 text-lg">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li
          class="flex justify-between items-center p-3 pl-6 cursor-pointer transition duration-300 hover:bg-gray-50"
        >
          <div>
            <a href="#" class="font-bold block text-gray-600">Song Title</a>
            <span class="text-gray-500 text-sm">Artist Name</span>
          </div>

          <div class="text-gray-600 text-lg">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li
          class="flex justify-between items-center p-3 pl-6 cursor-pointer transition duration-300 hover:bg-gray-50"
        >
          <div>
            <a href="#" class="font-bold block text-gray-600">Song Title</a>
            <span class="text-gray-500 text-sm">Artist Name</span>
          </div>

          <div class="text-gray-600 text-lg">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li
          class="flex justify-between items-center p-3 pl-6 cursor-pointer transition duration-300 hover:bg-gray-50"
        >
          <div>
            <a href="#" class="font-bold block text-gray-600">Song Title</a>
            <span class="text-gray-500 text-sm">Artist Name</span>
          </div>

          <div class="text-gray-600 text-lg">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li
          class="flex justify-between items-center p-3 pl-6 cursor-pointer transition duration-300 hover:bg-gray-50"
        >
          <div>
            <a href="#" class="font-bold block text-gray-600">Song Title</a>
            <span class="text-gray-500 text-sm">Artist Name</span>
          </div>

          <div class="text-gray-600 text-lg">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li
          class="flex justify-between items-center p-3 pl-6 cursor-pointer transition duration-300 hover:bg-gray-50"
        >
          <div>
            <a href="#" class="font-bold block text-gray-600">Song Title</a>
            <span class="text-gray-500 text-sm">Artist Name</span>
          </div>

          <div class="text-gray-600 text-lg">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li
          class="flex justify-between items-center p-3 pl-6 cursor-pointer transition duration-300 hover:bg-gray-50"
        >
          <div>
            <a href="#" class="font-bold block text-gray-600">Song Title</a>
            <span class="text-gray-500 text-sm">Artist Name</span>
          </div>

          <div class="text-gray-600 text-lg">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li
          class="flex justify-between items-center p-3 pl-6 cursor-pointer transition duration-300 hover:bg-gray-50"
        >
          <div>
            <a href="#" class="font-bold block text-gray-600">Song Title</a>
            <span class="text-gray-500 text-sm">Artist Name</span>
          </div>

          <div class="text-gray-600 text-lg">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li
          class="flex justify-between items-center p-3 pl-6 cursor-pointer transition duration-300 hover:bg-gray-50"
        >
          <div>
            <a href="#" class="font-bold block text-gray-600">Song Title</a>
            <span class="text-gray-500 text-sm">Artist Name</span>
          </div>

          <div class="text-gray-600 text-lg">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
      </ol>
      <!-- .. end Playlist -->
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
