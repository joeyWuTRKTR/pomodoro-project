# pomodoro
### Pomodoro is a web app for improving working/studying efficiency by recording finished rounds of each small task. Due to time recording system, it helps you knowing when to focus on working or take a short break.
Pomodoro是一款用於提升工作/學習效率的網路應用程式，藉由紀錄每個完成的小任務，幫助您了解何時需要專注以及休息。

# Demo in Heroku: 
https://mysterious-everglades-87446.herokuapp.com/#/s
![image](https://github.com/joeyWuTRKTR/pomodoro-project/blob/master/%E5%9C%96%E7%89%871.png)

# How to Use it?
1. First, create an account.   
首先，創建一個帳戶
2. Second, add a to-do task and start working/ studying.  
第二，新增一個待辦任務，然後開始工作/學習
3. if you added wrong to-do or had to delete it, you can go to "Report" page editting the task information.  
如果有輸入錯誤的待辦任務，在"報告頁面"更改或刪除
4. Using pomodoro as daily working efficiency promotor, check out "Statistic" page, visualizing your focusing situation.  
Pomodoro會記錄每個完成的任務，在"統計頁面"查看您的一週工作完成度
5. Finally, hope you enjoy it!  
最後，祝您有個好的使用體驗!

# Features: 
### 1. Common feature
- User can create to-do tasks and set expected finishing rounds.  
使用者可以建立任務、設置預計完成次數。
- Task can be started, stopped and reset.  
可以新增、暫停以及重設待辦任務。
- (Authentication) Log in/ Log out/ Registration.  
(使用者權限)註冊/登入/登出

### 2. Logged User:
- Task list can be edited and deleted.  
登入後的使用者可以編輯以及刪除任務清單中的任務
- Weekly statistic.  
每周統計功能

# Skills that I have used:
### 1. Axios: 
* Axios method for building fullstack RESTful API design.  
使用Axios方法建立全端RESTful API設計。
### 2. Async/await: 
* Asynchronous data requests/ response, clean code, avoid callback hell and promise chain.  
使用ES7非同步Async/await處理資料的request/response，避免callback hell和promise chain
### 3. Cors: 
* Cross-resources for request between frontend and backend.  
*使用Cors達到前後端資料傳送
### 4. Vue.js: 
* Using Vue.js for DOM & status management (Vuex).  
使用Vue.js做狀態管理以及DOM操作
### 5. Bootstrap: 
* using Bootstrap for layout and button.  
使用Bootstrap做layout和按鈕
### 6. JWT & Bcrypt: 
* Authentication => Implement register、sign in、sign out features by JWT & sessionID.
* Hash password => Aviod user data breach.  
使用JWT製作使用者權限功能，包含註冊、登入、登出。  
使用Bcrypt將密碼加密，避免資料外洩。
### 7. MongoDB: 
* using mongoose ODM technology, restore data in monogoDB.  
使用NoSQL MongoDB儲存資料，透過Mongoose操作。
