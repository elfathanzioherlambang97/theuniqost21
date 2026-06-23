// Cek status login
async function cekLogin() {
  const { data: { user } } = await db.auth.getUser()
  if (user) {
    document.getElementById('btn-login').style.display = 'none'
    document.getElementById('btn-register').style.display = 'none'
    document.getElementById('btn-logout').style.display = 'block'
  }
}

// Ambil data kamar dari Supabase
async function tampilKamar() {
  const { data: kamar, error } = await db
    .from('rooms')
    .select('*')
  
  if (error) {
    document.getElementById('room-list').innerHTML = '<p>Gagal memuat kamar</p>'
    return
  }
  
  let html = ''
  kamar.forEach(k => {
    const statusClass = k.status === 'tersedia' ? 'hijau' :
      k.status === 'booking' ? 'kuning' : 'merah'
    html += `
      <div class="room-card">
        <img src="${k.images || 'https://via.placeholder.com/300x200'}" alt="${k.name}">
        <h3>${k.name}</h3>
        <p class="status ${statusClass}">● ${k.status.toUpperCase()}</p>
        <p class="harga">Rp ${k.price.toLocaleString('id-ID')}/bulan</p>
        <p>${k.description || ''}</p>
        <p><strong>Fasilitas:</strong> ${k.facilities || '-'}</p>
        ${k.status === 'tersedia' || k.status === 'booking' ? `
          <a href="booking.html?id=${k.id}&type=booking" class="btn-boo king">📅 Booking</a>
          <a href="booking.html?id=${k.id}&type=pesan" class="btn-pesan">💳 Pesan Sekarang</a>
        ` : '<button disabled class="btn-penuh">Penuh</button>'}
      </div>
    `
  })
  
  document.getElementById('room-list').innerHTML = html || '<p>Belum ada kamar tersedia</p>'
}

// Logout
document.getElementById('btn-logout').addEventListener('click', async () => {
  await db.auth.signOut()
  window.location.reload()
})

cekLogin()
tampilKamar()