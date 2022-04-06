# Phantom Mask 

_所使用到的平台構建後端服務和數據庫如下_

## MVC架構

_Model、View、Controller 的區分，是希望能把應用程式的內部運作歸納成不同的部門，讓每個部門各自負責不同的關注點。主要目的是用來「簡化應用程式的開發與增強程式」的可維護性。_
![MVC](https://github.com/Mars621/Mask/blob/main/MVC.png)
### Model
_Model 常譯為「模型」，負責和資料庫溝通。在應用程式裡想要做「新增/瀏覽/修改/刪除」的動作，就需要先有 Model 層幫忙去資料庫裡取出必要的資料，把資料放進應用程式裡的某個程式物件，然後才能用 JavaScript 去操作該物件。_
### View
_View 常譯為「視圖」，View 所管理的功能層叫作「表現層 (presentation layer)」，顧名思義是負責管理畫面的呈現，也就是 HTML 樣板 (template)。_
### Controller
_Controller 常譯為「控制器」，它掌握使用者互動邏輯，也是應用程式收發 request/response 的核心。來自路由的 request 會先被送到 Controller，再由 Controller 通知 Model 調度資料，並且把資料傳遞給 View 來產生樣板 (template)，並將呈現資料的 HTML 頁面回傳給客戶端。_

## 後端服務
### Express (Node.js/JavaScript)
_雖然Express本身非常簡單，但開發者們已經創造相容的中間層套件來解決大部份web開發的問題，這些套件能處理cookies, sessions，登入，URL參數，POST資料等問題。_
* 替不同HTTP Method、不同URL路徑的requests編寫不同的處理方法
* 透過整合「畫面」的渲染引擎來達到插入資料到樣板中產生response
* 設定常見的web應用設定，例如：連線用的port和產生response的樣板位置
* 在request的處理流程中增加額外的「中間層」進行處理
### Mongodb
_MongoDB 是一個開源的「NoSQL ( 非關聯性 ) 文件資料庫」，相較其他種類的  NoSQL 資料庫，文件資料庫（Document Database）的特色在於適合存取非結構資料，NoSQL資料庫也因沒有Schema架構，也就是所謂的Schema-Free，可自由定義資料文件（Document）的結構，以及自由新增欄位，其主要功能為提供 WEB 應用可擴充套件的高效能資料儲存解決方案。_
* 支援查詢與完全索引
* 支援雲端計算層次的擴充套件性
* 支援複製與故障恢復

## 實作
使用 Node.js 開源、跨平台和允許開發者使用Javascript創造伺服器端工具和應用的執行環境。
![MVC](https://github.com/Mars621/Mask/blob/main/flow.png)

