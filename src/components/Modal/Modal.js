const Modal = () => {
  return (
    <div className="modal fade" id="consultModal" tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Оставьте заявку и мы вам перезвоним!</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>Укажите свои данные для связи</p>
            <form>
              <div className="mb-3">
                <input className="form-control" name="name" type="text" placeholder="Ваше имя" />
              </div>
              <div>
                <input className="form-control" name="phone" type="tel" placeholder="Ваш номер телефона" />
              </div>
            </form>
          </div>
          <div class="modal-footer justify-content-start">
            <button type="submit" class="btn btn-primary">Send message</button>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal