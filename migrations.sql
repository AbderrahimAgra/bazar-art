INSERT INTO admin (name, email, password, created_at, updated_at)
VALUES ('John Doe', 'john.doe@example.com', '$2y$12$ZLQULGucfHafBcMC9YtWb.L2yypHt0h7tJgPpNwGw0L0xMHJFtL9q', '2021-06-10 14:00:00', '2021-06-10 14:00:00');


INSERT INTO category (name, state, description, image, created_at, updated_at)
VALUES
('Painting Supplies', TRUE, 'All the supplies you need to create beautiful paintings', 'https://katiecouric.com/wp-content/uploads/2021/04/painting-supplies.jpg', '2021-01-05 10:30:00', '2021-01-05 10:30:00'),
('Scrapbooking', TRUE, 'Albums, papers, and embellishments for preserving memories', 'https://i.pinimg.com/originals/b5/ff/cd/b5ffcd2543ab505e6d11ce387152cc3c.jpg', '2021-02-10 14:25:00', '2021-02-10 14:25:00'),
('Knitting & Crochet', TRUE, 'Yarn, needles, and patterns for all your knitting and crochet projects', 'https://nimble-needles.com/wp-content/uploads/2021/12/the-difference-between-crochet-and-knitting-1024x684.jpg', '2021-03-12 17:45:00', '2021-03-12 17:45:00'),
('Sewing & Fabric', TRUE, 'Fabrics, threads, and sewing machines for all your sewing needs', 'https://i0.wp.com/sewingsociety.com/wp-content/uploads/2019/10/Bolts-of-Fabric.jpg?fit=960%2C618&ssl=1', '2021-04-18 09:15:00', '2021-04-18 09:15:00'),
('Beads & Jewelry', FALSE, 'Beads, tools, and findings for making your own jewelry', 'https://www.aworldofbeads.com/uploads/4/7/4/9/47492841/img-8135.jpg', '2021-05-25 11:35:00', '2021-05-25 11:35:00');

INSERT INTO products (name, description, image, qte, sale, price, admin_id, category_id, created_at, updated_at)
VALUES
('Acrylic Paint Set', '12 vibrant colors perfect for any painting project', 'http://cdn.shopify.com/s/files/1/0264/9391/1084/products/crockd-acrylic-paint-set-USA.webp?v=1662004455', 20, TRUE, 29.99, 1, 1, '2021-01-10 15:30:00', '2021-01-10 15:30:00'),
('Scrapbook Album Kit', 'A complete kit for creating a beautiful scrapbook album', 'https://ae01.alicdn.com/kf/HTB1L2zOKXXXXXbgXpXXq6xXFXXXn/Eno-Greeting-Retro-Complete-Scrapbook-Kit-Gift-Set-Creative-Scrapbooking-DIY-Photo-Album-with-Vintage-Page.jpg', 15, FALSE, 49.99, 1, 2, '2021-02-15 10:15:00', '2021-02-15 10:15:00'),
('Crochet Hook Set', 'A set of ergonomic crochet hooks in various sizes', 'http://images.squarespace-cdn.com/content/v1/5a721e6acf81e0929e9f64c8/1616542881059-B24IRS9KFED662EF902A/1+1+HTB1CBXahjQnBKNjSZSgq6xHGXXai+%286%296.JPG', 30, TRUE, 19.99, 1, 3, '2021-03-20 12:45:00', '2021-03-20 12:45:00'),
('Sewing Machine', 'A beginner-friendly sewing machine with multiple stitch options', 'https://www.contrado.co.uk/blog/wp-content/uploads/2017/04/History-of-sewing-header.png', 10, FALSE, 199.99, 1, 4, '2021-04-25 18:30:00', '2021-04-25 18:30:00'),
('Bead Assortment', 'A colorful assortment of beads for jewelry making', 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/91OZbQ8dcwL.jpg', 50, TRUE, 14.99, 1, 5, '2021-05-30 11:00:00', '2021-05-30 11:00:00');
