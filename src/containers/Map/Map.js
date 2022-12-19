const Map = () => {
  return (
    <div style={{ position:'relative', overflow: 'hidden' }}>
      <a href="https://yandex.kz/maps/org/72427085240/?utm_medium=mapframe&utm_source=maps" style={{ color: '#eee', fontSize: 12, position: 'absolute', top: 0 }}>Alcato</a>
      <iframe src="https://yandex.kz/map-widget/v1/-/CCUnbCwYTC" width="100%" height="400" allowFullScreen={true} style={{ position: 'relative' }}></iframe>
    </div>
  )
}

export default Map