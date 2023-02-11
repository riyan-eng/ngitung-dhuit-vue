<template>
  <h1 class="text-3xl font-bold underline">
    Jurnal Pembelian
  </h1>
  


  <form class="space-y-4 text-gray-700">
    <div class="flex flex-wrap">
      <!-- <div class="w-full">
        <label class="block mb-1" for="formGridCode_card">Card number</label>
        <input class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
          type="text" id="formGridCode_card" />
      </div> -->
    </div>
    <div class="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
      <div class="w-full px-2 md:w-1/2">
        <label class="block mb-1" for="formGridCode_name">Supllier</label>
        <select class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
          type="text" id="formGridCode_name">
          <option>Pilih Supllier</option>
          <option value="volvo">PT. Mahardika</option>
          <option value="saab">PT. Indonesia Makmur</option>
        </select>
      </div>
      <div class="w-full px-2 md:w-1/2">
        <div class="flex flex-wrap">
          <div class="w-full px-2 md:w-1/2">
            <label class="block mb-1" for="formGridCode_last">Kode transaksi</label>
            <input class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
              type="text" id="formGridCode_last" />
          </div>
          <div class="w-full px-2 md:w-1/2">
            <label class="block mb-1" for="formGridCode_last">Akun yang dikredit</label>
            <select class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
              type="text" id="formGridCode_name">
              <option>Pilih akun</option>
              <option value="volvo">Kas di tangan</option>
              <option value="saab">Kas di bank</option>
              <option value="saab">Utang dagang</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <div class="hidden sm:block" aria-hidden="true">
      <div class="py-5">
        <div class="border-t border-gray-200" />
      </div>
    </div>

    <div class="flex flex-wrap -mx-2 space-y-4 md:space-y-0" style="min-height: 300px;">
      <div class="w-full px-2 md:w-1/5">
        <label class="block mb-1" for="formGridCode_month">Item</label>
        <select class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
          type="text" id="formGridCode_month">
          <option>Pilih item</option>
          <option value="volvo">HP Pavilion 14</option>
          <option value="saab">Dell Inspire 15</option>
        </select>
      </div>
      <div class="w-full px-2 md:w-1/5">
        <label class="block mb-1" for="formGridCode_year">Kuantitas</label>
        <input class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
          type="text" id="formGridCode_year" />
      </div>
      <div class="w-full px-2 md:w-1/5">
        <label class="block mb-1" for="formGridCode_cvc">Harga</label>
        <input class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
          type="text" id="formGridCode_cvc" />
      </div>
      <div class="w-full px-2 md:w-1/5">
        <label class="block mb-1" for="formGridCode_cvc">Diskon</label>
        <input class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
          type="text" id="formGridCode_cvc" />
      </div>
      <div class="w-full px-2 md:w-1/5">
        <label class="block mb-1" for="formGridCode_cvc">Jumlah</label>
        <input class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
          type="text" id="formGridCode_cvc" />
      </div>
    </div>

    <div class="hidden sm:block" aria-hidden="true">
      <div class="py-5">
        <div class="border-t border-gray-200" />
      </div>
    </div>

    <div class="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
      <div class="w-full px-2 md:w-1/3">
        <label class="block mb-1" for="formGridCode_cvc">Keterangan</label>
        <textarea
          class="w-full h-24 px-3 py-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"></textarea>
      </div>
      <div class="w-full px-2 md:w-1/3">
        <!-- <label for="akun_kredit">Pilih akun yang dikredit:</label><br>
        <input type="radio" id="age1" name="age" value="30">
        <label class="ml-1" for="age1">Kas di tangan</label><br>
        <input type="radio" id="age2" name="age" value="60">
        <label class="ml-1" for="age2">Kas di bank</label><br>
        <input type="radio" id="age3" name="age" value="100">
        <label class="ml-1" for="age3">Utang dagang</label><br> -->
      </div>
      <div class="w-full px-2 md:w-1/3">
        <div class="text-gray-700 md:flex md:items-center mb-1">
          <div class="mb-1 md:mb-0 md:w-1/3">
            <label for="forms-labelLeftInputCode">Jumlah</label>
          </div>
          <div class="md:w-2/3 md:flex-grow">
            <input class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
              type="text" id="forms-labelLeftInputCode" />
          </div>
        </div>
        <div class="text-gray-700 md:flex md:items-center mb-1">
          <div class="mb-1 md:mb-0 md:w-1/3">
            <input type="checkbox" checked>
            <label class="ml-1" for="forms-labelLeftInputCode">PPN</label>
          </div>
          <div class="md:w-2/3 md:flex-grow">
            <input class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
              type="text" id="forms-labelLeftInputCode" />
          </div>
        </div>
        <div class="text-gray-700 md:flex md:items-center mb-1">
          <div class="mb-1 md:mb-0 md:w-1/3">
            <label for="forms-labelLeftInputCode">Total</label>
          </div>
          <div class="md:w-2/3 md:flex-grow">
            <input class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
              type="text" id="forms-labelLeftInputCode" />
          </div>
        </div>
      </div>
    </div>
  </form>
</template>