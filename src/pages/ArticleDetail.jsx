<div className="container">
  <div className="row">
    <div className="col-md-6">
      <div className="card">
        <div className="card-header bg-white">
          <h5 className="card-title">文章內容</h5>
        </div>
        <div className="card-body">
          <form>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">文章名稱</label>
              <input type="text" className="form-control" id="title" />
            </div>
            <div className="mb-3">
              <label htmlFor="author" className="form-label">文章作者</label>
              <input type="text" className="form-control" id="author" />
            </div>
            <div className="mb-3">
              <label htmlFor="content" className="form-label">文章描述</label>
              <textarea className="form-control" id="content" />
            </div>
            <div className="row gx-1 mb-3">
              <div className="col-md-2 mb-1">
                <div className="input-group input-group-sm">
                  <input type="text" className="form-control form-control" id="tag" placeholder="請輸入標籤" />
                  <button type="button" className="btn btn-outline-danger">x</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div className="col-md-6">
      <div className="card">
        <div className="card-header bg-white">
          <h5 className="card-title">文章圖片</h5>
        </div>
        <div className="card-body">
          ...
        </div>
      </div>
    </div>
  </div>


</div>