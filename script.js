const itens = [
    {
        url: "https://dl.airtable.com/.attachments/14ac9e946e1a02eb9ce7d632c83f742f/4fd98e64/product-1.jpeg",
        name: "High-Back Bench",
        price: 9.99,
        auth: "Ikea",
    },
    {
        url: "https://dl.airtable.com/.attachments/f3450755e165557344f7d6433242431e/93533098/product-1.jpeg",
        name: "Albany Table",
        price: 79.99,
        auth: "Marcos",
    },
    {
        url: "https://dl.airtable.com/.attachments/f292eaec4fea8a791b037c759ae559c9/2d5e34d5/product-4.jpeg",
        name: "Accent Chair",
        price: 25.99,
        auth: "Caressa",
    },
    {
        url: "https://dl.airtable.com/.attachments/5b3ad76dfd6ca5e31810cb99141c7ede/69829b2f/pexels-dominika-roseclay-1139785.jpg",
        name: "Wooden Table",
        price: 45.99,
        auth: "Caressa",
    },
    {
        url: "https://dl.airtable.com/.attachments/06bbede65bd09196b4a81a8e7b59e683/8af0aeb5/product-8.jpg",
        name: "Dining Table",
        price: 6.99,
        auth: "Caressa",
    },
    {
        url: "https://dl.airtable.com/.attachments/443aa7884207dae7c3cc127262a2f993/d4f33110/product-1.jpeg",
        name: "Sofa Set",
        price: 69.99,
        auth: "Liddy",
    },
    {
        url: "https://dl.airtable.com/.attachments/a889b1928b134c2ca0b5bbca32ea9abf/65c8a9a6/product-7.jpg",
        name: "Modern Bookshelf",
        price: 8.99,
        auth: "Marcos",
    },
    {
        url: "https://dl.airtable.com/.attachments/10fdf29ae17f2d1f98770ae42584d021/82b9403f/product-6.jpg",
        name: "Emperor Bad",
        price: 21.99,
        auth: "Liddy",
    },
    {
        url: "https://dl.airtable.com/.attachments/6ac7f7b55d505057317534722e5a9f03/9183491e/product-3.jpg",
        name: "Utopia Sofa",
        price: 39.95,
        auth: "Marcos",
    },
    {
        url: "https://dl.airtable.com/.attachments/da5e17fd71f50578d525dd5f596e407e/d5e88ac8/product-2.jpg",
        name: "Entertainment Center",
        price: 29.98,
        auth: "Liddy",
    },
    {
        url: "https://dl.airtable.com/.attachments/05ecddf7ac8d581ecc3f7922415e7907/a4242abc/product-1.jpeg",
        name: "Albany Sectional",
        price: 10.99,
        auth: "Ikea",
    },
    {
        url: "https://dl.airtable.com/.attachments/3245c726ee77d73702ba8c3310639727/f000842b/product-5.jpg",
        name: "Leather Sofa",
        price: 9.99,
        auth: "Liddy",
    },
]

const sells = document.querySelector(".itens-sell")

itens.forEach( (item) => {
    sells.innerHTML += ` <li>
<img src=${item.url} alt="" srcset="">
<p>${item.name}</p>
<span>${item.price}</span>
</li>`
})

document.querySelector(".All").addEventListener("click", () => {
    sells.innerHTML = ""
    itens.forEach( (item) => {
        sells.innerHTML += ` <li>
    <img src=${item.url} alt="" srcset="">
    <p>${item.name}</p>
    <span>${item.price}</span>
    </li>`
    })
})

document.querySelector(".Ikea").addEventListener("click", () => {
    const ikea = itens.filter((item) => {
        return item.auth === "Ikea"
        
    })
    sells.innerHTML = ""
    ikea.forEach( (item) => {
        sells.innerHTML += ` <li>
    <img src=${item.url} alt="" srcset="">
    <p>${item.name}</p>
    <span>${item.price}</span>
    </li>`
    })
})

document.querySelector(".Marcos").addEventListener("click", () => {
    const marcos = itens.filter((item) => {
        return item.auth === "Marcos"
        
    })
    sells.innerHTML = ""
    marcos.forEach( (item) => {
        sells.innerHTML += ` <li>
    <img src=${item.url} alt="" srcset="">
    <p>${item.name}</p>
    <span>${item.price}</span>
    </li>`
    })
})

document.querySelector(".Caressa").addEventListener("click", () => {
    const caressa = itens.filter((item) => {
        return item.auth === "Caressa"
        
    })
    sells.innerHTML = ""
    caressa.forEach( (item) => {
        sells.innerHTML += ` <li>
    <img src=${item.url} alt="" srcset="">
    <p>${item.name}</p>
    <span>${item.price}</span>
    </li>`
    })
})


document.querySelector(".Liddy").addEventListener("click", () => {
    const liddy = itens.filter((item) => {
        return item.auth === "Liddy"
        
    })
    sells.innerHTML = ""
    liddy.forEach( (item) => {
        sells.innerHTML += ` <li>
    <img src=${item.url} alt="" srcset="">
    <p>${item.name}</p>
    <span>${item.price}</span>
    </li>`
    })
})






