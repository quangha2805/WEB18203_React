import React, { useState } from 'react';
const Products = () => {
  const [name, setName] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [description, setDescription] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || image.length === 0 || !price || !description || !category) {
      setMessage('Vui lòng nhập thông tin sản phẩm');
      return;
    }

    fetch('http://localhost:3002/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, image, price, description, category }),
    })
      .then(response => response.json())
      .then(data => {
        setName('');
        setImage('');
        setPrice(0);
        setDescription('');
        setCategory('');
        alert("Thêm sản phẩm thành công");
        window.location.href = '/productlist';
      })
      .catch(error => {
        setMessage('Lỗi khi thêm mới sản phẩm');
      });
  };


  return (
    <div className="container">
      <h1 className='text-center text-uppercase fw-bold m-4'>Thêm mới sản phẩm</h1>

      <form onSubmit={handleSubmit}>
        <div className="form__group mb-3">
          <div className="form__label mt-2 mb-1">
            <label htmlFor="">Tên sản phẩm</label>
          </div>
          <div className="form__input">
            <input className='form-control'
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Tên sản phẩm"
            />
          </div>
          <div className="noti__err mt-2">
            {!name && <div style={{ color: "red" }}>{message} </div>}
          </div>
        </div>

        <div className="form__group mb-3">
          <div className="form__label mt-2 mb-1">
            <label htmlFor="">Ảnh sản phẩm</label>
          </div>
          <div className="form__input">
            <input className='form-control'
              type="text"
              onChange={(e) => setImage(e.target.value)}
              placeholder="Ảnh sản phẩm"
            />
          </div>
          <div className="noti__err mt-2">
          {!image && <div style={{ color: "red" }}>{message} </div>}
          </div>
        </div>

        <div className="form__group mb-3">
          <div className="form__label mt-2 mb-1">
            <label htmlFor="">Mô tả sản phẩm</label>
          </div>
          <div className="form__input">
            <input className='form-control'
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Mô tả sản phẩm"
            />
          </div>
          <div className="noti__err mt-2">
            {!description && <div style={{ color: "red" }}>{message}</div>}
          </div>
        </div>

        <div className="form__group mb-3">
          <div className="form__label mt-2 mb-1">
            <label htmlFor="">Danh mục sản phẩm</label>
          </div>
          <div className="form__input">
            <select className='form-control'
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              name="category"
              id="category"
            >
              <option value="">Chọn danh mục</option>
              <option value="Fifa">Fifa</option>
              <option value="Lmht">LMHT</option>
              <option value="Csgo">CSGO</option>
            </select>
          </div>
          <div className="noti__err mt-2">
            {!category && <div style={{ color: "red" }}>{message}</div>}
          </div>
        </div>

        <div className="form__group mb-3">
          <div className="form__label mt-2 mb-1">
            <label htmlFor="">Giá tiền sản phẩm</label>
          </div>
          <div className="form__input">
            <input className='form-control'
              type="text"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              placeholder="Giá tiền"
            />
          </div>
          <div className="noti__err mt-2">
            {!price && <div style={{ color: "red" }}>{message}</div>}
          </div>
        </div>


        <button type="submit" className='btn btn-outline-success d-flex m-auto mt-4 px-4'>Thêm mới</button>
      </form>
    </div>
  );
};

export default Products;
