POST_URL = http://localhost:3005/categories/create

post_data:
    @curl --location --request POST $(POST_URL) \
        --header 'Content-Type: application/json' \
        --data-raw '{
            "name": "Handcrafted Pottery",
            "status": "active",
            "image": "https://example.com/images/handcrafted_pottery.jpg",
            "description": "Our collection of unique, handcrafted pottery pieces made by local artisans."
        }'
