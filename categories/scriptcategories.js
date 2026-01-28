const books = {
    classics: [
        { img: '../img/sales/sale1.jpg', type: 'PAPERBACK', title: 'Pride and Prejudice', author: 'Jane Austen', price: '$10.99' },
        { img: '../img/bestsellers/cover1.jpg', type: 'PAPERBACK', title: 'The Great Gatsby', author: 'F. Scott-Fitzgerald', price: '$14.99' },
        { img: '../img/sales/sale3.jpg', type: 'PAPERBACK', title: 'Anna Karenina', author: 'Leo Tolstoy', price: '$10.99' },
        { img: '../img/sales/sale4.jpg', type: 'PAPERBACK', title: 'Little Women', author: 'Louisa May Alcott', price: '$12.99' },
        { img: '../img/sales/sale5.jpg', type: 'PAPERBACK', title: 'Frankenstein', author: 'Mary . Shelley', price: '$11.99' },
        { img: '../img/sales/sale6.jpg', type: 'PAPERBACK', title: 'Crime And Punishment', author: 'Fyodor Dostoevsky', price: '$12.99' },
        { img: '../img/sales/sale7.png', type: 'PAPERBACK', title: 'The Call Of The Wild', author: 'London', price: '$11.99' },
        { img: '../book genres/poetry8.jpg', type: 'PAPERBACK', title: 'The Odyssey', author: 'Homer', price: '$15.99' },
    ],


    kids: [
        { img: '../img/kids/cover2.jpg', type: 'PAPERBACK', title: 'Harry Potter and the Philosopher\'s Stone', author: 'J. K. Rowling', price: '$12.99' },
        { img: '../img/kids/cover3.png', type: 'PAPERBACK', title: 'Harry Potter and the Chamber of Secrets', author: 'J. K. Rowling', price: '$12.99' },
        { img: '../img/kids/cover4.jpg', type: 'PAPERBACK', title: 'Harry Potter and the Prisoner of Azkaban', author: 'J. K. Rowling', price: '$12.99' },
        { img: '../img/kids/cover5.jpg', type: 'PAPERBACK', title: 'Harry Potter and the Goblet of Fire', author: 'J. K. Rowling', price: '$12.99' },
        { img: '../img/kids/cover6.jpg', type: 'PAPERBACK', title: 'Harry Potter and the Order of the Phoenix', author: 'J. K. Rowling', price: '$14.99' },
        { img: '../img/kids/cover7.jpg', type: 'PAPERBACK', title: 'Harry Potter and the Half-Blood Prince', author: 'J. K. Rowling', price: '$13.99' },
        { img: '../img/kids/cover8.jpg', type: 'PAPERBACK', title: 'Harry Potter and the Deathly Hallows', author: 'J. K. Rowling', price: '$14.99' },
        { img: '../img/sales/sale8.jpg', type: 'PAPERBACK', title: 'The Little Prince', author: 'Antoine De Saint-Exupery', price: '$12.99' },
        { img: '../img/kids/kids1.jpg', type: 'PAPERBACK', title: 'Tom Sawyer', author: 'Mark Twain', price: '$10.99' },
        { img: '../img/kids/kids2.jpg', type: 'PAPERBACK', title: 'Huckleberry Finn', author: 'Mark Twain', price: '$12.99' },
        { img: '../img/kids/kids3.jpg', type: 'PAPERBACK', title: 'Heidi', author: 'Johanna Spyri', price: '$10.99' },
        { img: '../img/kids/kids4.jpg', type: 'PAPERBACK', title: 'Anne of Green Gables', author: 'L. M. Montgomery', price: '$12.99' },
        { img: '../img/kids/kids5.jpg', type: 'PAPERBACK', title: 'Oliver Twist', author: 'Charles Dickens', price: '$10.99' },
        { img: '../img/kids/kids6.jpg', type: 'PAPERBACK', title: 'The Silver Skates', author: 'Mary Mapes Dodge', price: '$9.99' },
        { img: '../img/kids/kids7.jpg', type: 'PAPERBACK', title: 'Mr. Stink', author: 'David Williams', price: '$11.99' },
        { img: '../img/kids/kids8.jpg', type: 'PAPERBACK', title: 'Spaceboy', author: 'David Williams', price: '$11.99' },
        { img: '../img/kids/kids9.jpg', type: 'PAPERBACK', title: 'The Blunders', author: 'David Williams', price: '$11.99' },
        { img: '../img/kids/kids10.jpg', type: 'PAPERBACK', title: 'Gangsta Granny', author: 'David Williams', price: '$11.99' },
        { img: '../img/kids/kids11.jpg', type: 'PAPERBACK', title: 'Billionaire Boy', author: 'David Williams', price: '$11.99' },
        { img: '../img/kids/kids12.jpg', type: 'PAPERBACK', title: 'The Midnight Gang', author: 'David Williams', price: '$11.99' },
        { img: '../img/kids/kids14.jpg', type: 'PAPERBACK', title: 'Astro Chimp', author: 'David Williams', price: '$11.99' },
        { img: '../img/kids/kids13.jpg', type: 'PAPERBACK', title: 'Robodog', author: 'David Williams', price: '$11.99' },


    ],


    fantasy: [
        { img: '../book genres/fantasy1.jpg', type: 'PAPERBACK', title: 'The Familiar', author: 'Leigh Bardugo', price: '$12.90' },
        { img: '../book genres/fantasy2.jpg', type: 'PAPERBACK', title: 'Powerful', author: 'Lauren Roberts', price: '$13.90' },
        { img: '../book genres/fantasy3.jpg', type: 'PAPERBACK', title: 'A Short Walk Through A Wide World', author: 'Douglas Westerbeke', price: '$13.90' },
        { img: '../book genres/fantasy4.jpg', type: 'PAPERBACK', title: 'A Sweet Sting Of Salt', author: 'Rose Sutherland', price: '$11.90' },
        { img: '../book genres/fantasy5.jpg', type: 'PAPERBACK', title: 'The Cemetery of Untold Stories', author: 'Julia Alvarez', price: '$10.90' },
        { img: '../book genres/fantasy6.jpg', type: 'PAPERBACK', title: 'The Gaze Upon Wicked Gods', author: 'Molly Chang', price: '$13.90' },
        { img: '../book genres/fantasy7.jpg', type: 'PAPERBACK', title: 'Indian Burial Ground', author: 'Nick Medina', price: '$12.90' },
        { img: '../book genres/fantasy8.jpg', type: 'PAPERBACK', title: 'Zodiac Academy', author: 'Caroline Peckham & Susanne Valenti', price: '$13.90' },


    ],
    horror: [
        { img: '../book genres/horror1.jpg', type: 'PAPERBACK', title: 'You Know What You Did', author: 'K. T. Nguyen', price: '$12.90' },
        { img: '../book genres/horror2.jpg', type: 'PAPERBACK', title: 'Ghost Station', author: 'S. A. Barnes', price: '$11.90' },
        { img: '../book genres/horror3.jpg', type: 'PAPERBACK', title: 'The Cathering', author: 'C. J. Tudor', price: '$12.90' },
        { img: '../book genres/horror4.jpg', type: 'PAPERBACK', title: 'Your Blood My Bunes', author: 'Kelly Andrews', price: '$13.90' },
        { img: '../book genres/horror5.jpg', type: 'PAPERBACK', title: 'Hearts Still Beating', author: 'Brooke Archeer', price: '$12.90' },
        { img: '../book genres/horror6.jpg', type: 'PAPERBACK', title: 'Bless Your Heart', author: 'Lindy Ryan', price: '$10.90' },
        { img: '../book genres/horror7.jpg', type: 'PAPERBACK', title: 'Someone You Can Build A Nest In', author: 'John Wiswell', price: '$12.90' },
        { img: '../book genres/horror8.jpg', type: 'PAPERBACK', title: 'Granite Harbor', author: 'Peter Nichols', price: '$12.90' },

    ],
    comedy: [
        { img: '../book genres/comedy1.jpg', type: 'PAPERBACK', title: 'The Hitchhiker\'s Guide to the Galaxy' , author: 'Douglas Adams', price: '$11.99' },
        { img: '../book genres/comedy8.jpg', type: 'HARDCOVER', title: 'The Restaurant at the End of the Universe', author: 'Douglas Adams', price: '$11.99' },
        { img: '../book genres/comedy3.jpg', type: 'HARDCOVER', title: 'Mort', author: 'Terry Pratchett', price: '$12.99' },
        { img: '../book genres/comedy4.jpg', type: 'HARDCOVER', title: 'Equal Rites', author: 'Terry Pratchett', price: '$13.99' },
        { img: '../book genres/comedy5.jpg', type: 'HARDCOVER', title: 'The Color of Magic', author: 'Terry Pratchett', price: '$12.99' },
        { img: '../book genres/comedy6.jpg', type: 'HARDCOVER', title: 'Guard Guards', author: 'Terry Pratchett', price: '$13.99' },
        { img: '../book genres/comedy7.jpg', type: 'HARDCOVER', title: 'The Light Fantastic', author: 'Terry Pratchett', price: '$11.99' },
        { img: '../book genres/comedy2.jpg', type: 'HARDCOVER', title: 'Good Omens', author: 'Neil Gaiman & Terry Pratchett', price: '$13.99' },

    ],
    romance: [
        { img: '../images/romancebook4.jpg', type: 'PAPERBACK', title: 'The Notebook', author: 'Nicholas Sparks', price: '$10.99' },
        { img: '../img/sales/sale1.jpg', type: 'HARDCOVER', title: 'Pride and Prejudice', author: 'Jane Austen', price: '$14.99' },
        { img: '../images/romancebook1.jpg', type: 'PAPERBACK', title: 'Happy Place', author: 'Emily Henry', price: '$12.99' },
        { img: '../images/romancebook2.jpg', type: 'PAPERBACK', title: 'The Graphic Novel', author: 'Jane Eyre', price: '$10.99' },
        { img: '../images/romancebook3.jpg', type: 'PAPERBACK', title: 'The Kiss Quotient', author: 'Helen Hoang', price: '$13.99' },
        { img: '../images/romancebook5.jpg', type: 'PAPERBACK', title: 'Vision In White', author: 'Nora Roberts', price: '$11.99' },
        { img: '../images/romancebook6.jpg', type: 'PAPERBACK', title: 'Funny Story', author: 'Emily Henry', price: '$12.99' },
        { img: '../images/romancebook7.jpg', type: 'PAPERBACK', title: 'Bared To You', author: 'Sylvia Day', price: '$11.99' },
        { img: '../images/romancebook8.jpg', type: 'PAPERBACK', title: 'The Proposal', author: 'Jasmine Guillory', price: '$13.99' },

    ],
    poetry: [
        { img: '../book genres/poetry7.jpg', type: 'PAPERBACK', title: 'The Iliad', author: 'Homer', price: '$17.99' },
        { img: '../book genres/poetry1.jpg', type: 'PAPERBACK', title: 'Milk and Honey', author: 'Rupi Kaur', price: '$10.99' },
        { img: '../book genres/poetry2.jpg', type: 'PAPERBACK', title: 'Where the Sidewalk Ends', author: 'Shel Silverstein', price: '$12.99' },
        { img: '../book genres/poetry3.jpg', type: 'PAPERBACK', title: 'The Poetx', author: 'Elizabeth Acevedo', price: '$12.99' },
        { img: '../book genres/poetry4.jpg', type: 'PAPERBACK', title: 'The Sun And Her Flowers', author: 'Rupi Kaur', price: '$10.99' },
        { img: '../book genres/poetry5.jpg', type: 'PAPERBACK', title: 'The Princess Saves Herself In This One', author: 'Amanda Lovelace', price: '$10.99' },
        { img: '../book genres/poetry6.jpg', type: 'PAPERBACK', title: 'Beowulf', author: 'Seamus Heaney', price: '$10.99' },
        { img: '../book genres/poetry8.jpg', type: 'PAPERBACK', title: 'The Odyssey', author: 'Homer', price: '$15.99' },

    ],
    history: [
        { img: '../images/historybook1.jpg', type: 'PAPERBACK', title: 'Guns, Germs, and Steel', author: 'Jared Diamond', price: '$13.90' },
        { img: '../images/historybook2.jpg', type: 'PAPERBACK', title: 'Alexander Hamilton', author: 'Ron Chernow', price: '$14.99' },
        { img: '../images/historybook3.jpg', type: 'PAPERBACK', title: 'The Wager', author: 'David Grann', price: '$11.99' },
        { img: '../images/historybook4.jpg', type: 'PAPERBACK', title: 'The Great Gatsby', author: 'F. Scott-Fitzgerald', price: '$14.99' },
        { img: '../images/historybook5.jpg', type: 'PAPERBACK', title: 'Sapiens', author: 'Yuval Noah Harari', price: '$13.99' },
        { img: '../images/historybook6.jpg', type: 'PAPERBACK', title: 'Killers of the Flower Moon', author: 'David Grann', price: '$14.99' },
        { img: '../images/historybook7.jpg', type: 'PAPERBACK', title: '1491', author: 'Charles C. Mann', price: '$12.99' },
        { img: '../images/historybook8.jpg', type: 'PAPERBACK', title: 'A Peoples History of the United States', author: 'Howard Zinn', price: '$12.99' },
    ],
    travel: [
        { img: '../images/travelbook2.jpg', type: 'PAPERBACK', title: 'Down Under', author: 'Bill Bryson', price: '$12.90' },
        { img: '../images/travelbook1.jpg', type: 'HARDCOVER', title: 'Eat, Pray, Love', author: 'Elizabeth Gilbert', price: '$13.99' },
        { img: '../images/travelbook3.jpg', type: 'PAPERBACK', title: 'A Walk in the Woods ', author: 'Bill Bryson', price: '$12.90' },
        { img: '../images/travelbook4.jpg', type: 'HARDCOVER', title: 'On the Road', author: 'Jack Kerouac', price: '$13.99' },
        { img: '../images/travelbook5.jpg', type: 'PAPERBACK', title: 'Into Thin Air', author: 'Jon Krakauer', price: '$12.90' },
        { img: '../images/travelbook6.jpg', type: 'HARDCOVER', title: 'A Year in Provence', author: 'Peter Mayle', price: '$13.99' },
        { img: '../images/travelbook7.jpg', type: 'PAPERBACK', title: 'Blue Highways', author: 'William Least', price: '$12.90' },
        { img: '../images/travelbook8.jpg', type: 'PAPERBACK', title: 'Dark Star Safari', author: 'Paul Theroux', price: '$13.99' },

    ]
};

function showCategory(category) {
    const categoryContent = document.getElementById('category-content');
    const selectedBooks = books[category];
    categoryContent.innerHTML = selectedBooks.map(book => `
    <div class="single-title">
      <div class="card-header">
        <img src="${book.img}" alt="${book.title}">
      </div>
      <div class="card-body">
        <div class="title">
          <span class="red">${book.type}</span>
          <p>${book.title}</p>
          <p>${book.author}</p>
          <p>${book.price}</p>
        </div>
      </div>
    </div>
  `).join('');
}

document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const category = this.getAttribute('data-category');
        showCategory(category);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.nav-list a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = link.getAttribute('data-category');
            showCategory(category);
        });
    });

    // Show 'Classics' category by default
    showCategory('classics');
});


let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("open");
    menuBtnChange();//calling the function(optional)
});

searchBtn.addEventListener("click", ()=>{ // Sidebar open when you click on the search iocn
    sidebar.classList.toggle("open");
    menuBtnChange(); //calling the function(optional)
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
    if(sidebar.classList.contains("open")){
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
    }else {
        closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
    }
}

// Select the image element
const profileImg = document.getElementById('profileImg');

// Add a click event listener to the image
profileImg.addEventListener('click', function() {
    // Navigate to the specified page
    window.location.href = '../featuredc.html';
});