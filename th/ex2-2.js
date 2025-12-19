/* 
1. Callback & Higher-Order Function มีข้อดีอย่างไร
Answer: ลดความซ้ำซ้อนของโค้ดทำให้ง่ายแก่การอ่านและปรับปรุง แต่ยากสำหรับการทำความเข้าใจ โครงสร้าง ลำดับการทำงาน ต้องใช้เวลาในการทำความเข้าใจ


2. จากการลองใช้ Callback Function ในระบบเกมและระบบแจ้งเตือน คุณคิดว่าโค้ดอ่านง่ายขึ้นหรือไม่ เพราะอะไร 
Answer: อ่านง่ายขึ้นเพราะสามารถดูการทำงานของหลายๆฟังชันได้โดยการดูที่ การ call function จะสามารถดูได้ว่า function ไหนทำงานเหมือนกันบ้าง 
        เช่น
        console.log(sendNotification(postCreated));  
        console.log(sendNotification(postLiked));     
        console.log(sendNotification(postCommented)); 
        console.log(sendNotification(postShared)); 
        sendNotification เป็น Higher-Order Function ซื่งเป็น body หลักในการ call function อื่นๆ ที่โค้งสร้าง ไม่ต่างกัน เพื่อลดความซ้ำซ้อน
        

3. หากต้องสอนเพื่อนให้เข้าใจ Callback & Higher-Order Function ใน 5 นาที จะอธิบายอย่างไร 
Answer: Higher-Order Function ฟังก์ชันที่สามารถสั่งให้สร้างฟังก์ชันใหม่ขึ้นมาได้
        Callback Function ฟังก์ชันที่เราส่งเข้าไปให้หัวหน้า เพื่อให้ Higher เรียกใช้เมื่อถึงเวลาที่เหมาะสม
        ถ้าเห็นฟังก์ชันไหนที่มีการส่ง "ชื่อฟังก์ชัน" เข้าไปในวงเล็บของอีกฟังก์ชันหนึ่ง ให้เดาได้เลยว่านั่นคือเรื่อง Callback และ Higher


*/
