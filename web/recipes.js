const recipes = [
      {
        type: "breakfast",
        title: "Breakfast Burrito",
        time: "20 minutes",
        ingredients: ["Eggs", "Tortillas", "Shredded cheese", "Bell pepper", "Salsa"],
        steps: [
          "Scramble the eggs with diced bell pepper.",
          "Warm the tortillas.",
          "Fill with eggs and cheese.",
          "Add salsa, roll, and serve."
        ]
      },
      {
        type: "breakfast",
        title: "Greek Yogurt Parfait",
        time: "5 minutes",
        ingredients: ["Greek yogurt", "Berries", "Granola", "Honey"],
        steps: [
          "Layer yogurt, berries, and granola in a bowl or cup.",
          "Drizzle lightly with honey."
        ]
      },
      {
        type: "breakfast",
        title: "Loaded Scrambled Eggs",
        time: "12 minutes",
        ingredients: ["Eggs", "Cheddar cheese", "Spinach", "Diced tomato", "Green onion"],
        steps: [
          "Whisk the eggs.",
          "Cook spinach and tomato briefly in a skillet.",
          "Add eggs and scramble until nearly set.",
          "Finish with cheese and green onion."
        ]
      },
      {
        type: "breakfast",
        title: "Banana Peanut Butter Oatmeal",
        time: "8 minutes",
        ingredients: ["Oats", "Milk or water", "Banana", "Peanut butter", "Cinnamon"],
        steps: [
          "Cook oats according to package directions.",
          "Stir in sliced banana and peanut butter.",
          "Sprinkle with cinnamon."
        ]
      },
      {
        type: "breakfast",
        title: "French Toast",
        time: "15 minutes",
        ingredients: ["Bread", "Eggs", "Milk", "Cinnamon", "Butter", "Maple syrup"],
        steps: [
          "Whisk eggs, milk, and cinnamon.",
          "Dip bread into the mixture.",
          "Cook in a buttered skillet until golden on both sides.",
          "Serve with syrup."
        ]
      },
      {
        type: "breakfast",
        title: "Breakfast Sandwich",
        time: "15 minutes",
        ingredients: ["English muffins", "Eggs", "Cheese", "Sausage or bacon"],
        steps: [
          "Cook the egg and breakfast meat.",
          "Toast the English muffin.",
          "Stack with cheese and serve."
        ]
      },
      {
        type: "breakfast",
        title: "Veggie Omelet",
        time: "15 minutes",
        ingredients: ["Eggs", "Bell pepper", "Onion", "Mushrooms", "Cheese"],
        steps: [
          "Cook the vegetables until softened.",
          "Pour in beaten eggs.",
          "Add cheese, fold the omelet, and cook until set."
        ]
      },
      {
        type: "breakfast",
        title: "Berry Smoothie",
        time: "5 minutes",
        ingredients: ["Frozen berries", "Banana", "Greek yogurt", "Milk", "Honey"],
        steps: [
          "Add all ingredients to a blender.",
          "Blend until smooth.",
          "Adjust thickness with more milk if needed."
        ]
      },

      {
        type: "lunch",
        title: "Chicken Caesar Wrap",
        time: "15 minutes",
        ingredients: ["Cooked chicken", "Romaine", "Caesar dressing", "Parmesan", "Large tortillas"],
        steps: [
          "Chop the chicken and romaine.",
          "Toss with dressing and Parmesan.",
          "Wrap tightly in a tortilla and slice."
        ]
      },
      {
        type: "lunch",
        title: "Turkey Avocado Sandwich",
        time: "10 minutes",
        ingredients: ["Bread", "Turkey", "Avocado", "Lettuce", "Tomato", "Mustard"],
        steps: [
          "Toast the bread if desired.",
          "Layer turkey, avocado, lettuce, and tomato.",
          "Add mustard and serve."
        ]
      },
      {
        type: "lunch",
        title: "Grilled Cheese & Tomato Soup",
        time: "20 minutes",
        ingredients: ["Bread", "Cheddar cheese", "Butter", "Tomato soup"],
        steps: [
          "Butter the bread and add cheese.",
          "Cook in a skillet until golden and melted.",
          "Heat tomato soup and serve alongside."
        ]
      },
      {
        type: "lunch",
        title: "Chicken Salad Sandwich",
        time: "15 minutes",
        ingredients: ["Cooked chicken", "Mayonnaise", "Celery", "Grapes", "Bread"],
        steps: [
          "Chop chicken, celery, and grapes.",
          "Mix with mayonnaise.",
          "Serve on bread or lettuce."
        ]
      },
      {
        type: "lunch",
        title: "Taco Salad",
        time: "20 minutes",
        ingredients: ["Ground beef or turkey", "Lettuce", "Tomato", "Cheese", "Tortilla chips", "Salsa"],
        steps: [
          "Brown and season the meat.",
          "Layer lettuce, tomato, cheese, and meat.",
          "Top with crushed tortilla chips and salsa."
        ]
      },
      {
        type: "lunch",
        title: "Ham & Cheese Melt",
        time: "12 minutes",
        ingredients: ["Bread", "Ham", "Cheese", "Mustard", "Butter"],
        steps: [
          "Layer ham, cheese, and mustard on bread.",
          "Butter the outside.",
          "Cook in a skillet until golden and melted."
        ]
      },
      {
        type: "lunch",
        title: "Mediterranean Chickpea Bowl",
        time: "15 minutes",
        ingredients: ["Chickpeas", "Cucumber", "Tomato", "Feta", "Olives", "Italian dressing"],
        steps: [
          "Drain and rinse chickpeas.",
          "Chop cucumber and tomato.",
          "Combine everything and toss with dressing."
        ]
      },
      {
        type: "lunch",
        title: "BLT Wrap",
        time: "15 minutes",
        ingredients: ["Bacon", "Lettuce", "Tomato", "Mayonnaise", "Tortilla"],
        steps: [
          "Cook bacon until crisp.",
          "Spread mayonnaise over the tortilla.",
          "Add bacon, lettuce, and tomato, then wrap."
        ]
      },

      {
        type: "dinner",
        title: "Sheet-Pan Chicken & Vegetables",
        time: "40 minutes",
        ingredients: ["Chicken breasts or thighs", "Broccoli", "Carrots", "Potatoes", "Olive oil", "Seasoning"],
        steps: [
          "Heat oven to 425°F.",
          "Cut vegetables into even pieces and toss with oil and seasoning.",
          "Arrange chicken and vegetables on a sheet pan.",
          "Bake until the chicken is fully cooked and vegetables are tender."
        ]
      },
      {
        type: "dinner",
        title: "One-Pan Beef Tacos",
        time: "25 minutes",
        ingredients: ["Ground beef", "Taco seasoning", "Tortillas", "Cheese", "Lettuce", "Tomato"],
        steps: [
          "Brown the beef and drain excess fat.",
          "Add taco seasoning and a splash of water.",
          "Warm tortillas and fill with beef and toppings."
        ]
      },
      {
        type: "dinner",
        title: "Garlic Butter Pasta",
        time: "20 minutes",
        ingredients: ["Pasta", "Butter", "Garlic", "Parmesan", "Parsley"],
        steps: [
          "Cook pasta according to package directions.",
          "Melt butter and gently cook minced garlic.",
          "Toss pasta with garlic butter and Parmesan.",
          "Finish with parsley."
        ]
      },
      {
        type: "dinner",
        title: "Baked Spaghetti",
        time: "45 minutes",
        ingredients: ["Spaghetti", "Ground beef", "Pasta sauce", "Mozzarella", "Parmesan"],
        steps: [
          "Cook spaghetti and brown the beef.",
          "Mix with pasta sauce.",
          "Top with cheese and bake until bubbly."
        ]
      },
      {
        type: "dinner",
        title: "Chicken Alfredo",
        time: "30 minutes",
        ingredients: ["Chicken breast", "Fettuccine", "Alfredo sauce", "Parmesan", "Garlic"],
        steps: [
          "Cook pasta.",
          "Season and cook chicken, then slice.",
          "Warm Alfredo sauce with garlic.",
          "Combine and top with Parmesan."
        ]
      },
      {
        type: "dinner",
        title: "Meatloaf & Mashed Potatoes",
        time: "60 minutes",
        ingredients: ["Ground beef", "Breadcrumbs", "Egg", "Ketchup", "Potatoes", "Butter", "Milk"],
        steps: [
          "Mix beef, breadcrumbs, egg, and seasoning.",
          "Shape into a loaf, top with ketchup, and bake.",
          "Boil potatoes and mash with butter and milk."
        ]
      },
      {
        type: "dinner",
        title: "BBQ Chicken Sandwiches",
        time: "25 minutes",
        ingredients: ["Cooked shredded chicken", "BBQ sauce", "Buns", "Coleslaw"],
        steps: [
          "Warm chicken with BBQ sauce.",
          "Pile onto buns.",
          "Top with coleslaw if desired."
        ]
      },
      {
        type: "dinner",
        title: "Beef & Broccoli Stir-Fry",
        time: "30 minutes",
        ingredients: ["Thin-sliced beef", "Broccoli", "Soy sauce", "Garlic", "Rice"],
        steps: [
          "Cook rice.",
          "Sear beef in a hot skillet.",
          "Add broccoli, garlic, and soy sauce.",
          "Cook until broccoli is tender-crisp and serve over rice."
        ]
      },
      {
        type: "dinner",
        title: "Chicken Parmesan",
        time: "40 minutes",
        ingredients: ["Chicken breasts", "Breadcrumbs", "Marinara sauce", "Mozzarella", "Parmesan"],
        steps: [
          "Bread the chicken and cook until golden.",
          "Top with marinara and cheese.",
          "Bake until the cheese melts and chicken is cooked through."
        ]
      },
      {
        type: "dinner",
        title: "Sausage & Peppers",
        time: "35 minutes",
        ingredients: ["Italian sausage", "Bell peppers", "Onion", "Olive oil", "Hoagie rolls"],
        steps: [
          "Slice peppers and onion.",
          "Brown sausage.",
          "Cook vegetables until tender.",
          "Combine and serve on rolls or over rice."
        ]
      },
      {
        type: "dinner",
        title: "Homestyle Chili",
        time: "45 minutes",
        ingredients: ["Ground beef", "Kidney beans", "Tomato sauce", "Diced tomatoes", "Onion", "Chili seasoning"],
        steps: [
          "Brown the beef and onion.",
          "Add beans, tomatoes, sauce, and seasoning.",
          "Simmer until thick and flavorful."
        ]
      },
      {
        type: "dinner",
        title: "Chicken Fajitas",
        time: "30 minutes",
        ingredients: ["Chicken breast", "Bell peppers", "Onion", "Fajita seasoning", "Tortillas"],
        steps: [
          "Slice chicken and vegetables.",
          "Cook chicken with seasoning.",
          "Add peppers and onion and cook until tender.",
          "Serve in warm tortillas."
        ]
      },
      {
        type: "dinner",
        title: "Baked Salmon & Rice",
        time: "30 minutes",
        ingredients: ["Salmon fillets", "Rice", "Lemon", "Garlic", "Broccoli"],
        steps: [
          "Cook rice.",
          "Season salmon with lemon, garlic, salt, and pepper.",
          "Bake until flaky.",
          "Serve with broccoli and rice."
        ]
      },
      {
        type: "dinner",
        title: "Sloppy Joes",
        time: "25 minutes",
        ingredients: ["Ground beef", "Sloppy joe sauce", "Buns", "Onion"],
        steps: [
          "Brown beef and onion.",
          "Drain excess fat.",
          "Stir in sauce and simmer.",
          "Serve on buns."
        ]
      },
      {
        type: "dinner",
        title: "Chicken & Rice Casserole",
        time: "55 minutes",
        ingredients: ["Chicken", "Rice", "Cream of chicken soup", "Broth", "Mixed vegetables"],
        steps: [
          "Combine rice, soup, broth, and vegetables in a casserole dish.",
          "Place chicken on top.",
          "Cover and bake until rice is tender and chicken is cooked."
        ]
      },
      {
        type: "dinner",
        title: "Cheeseburger Skillet",
        time: "25 minutes",
        ingredients: ["Ground beef", "Pasta", "Cheddar cheese", "Beef broth", "Onion"],
        steps: [
          "Brown beef and onion.",
          "Add pasta and broth.",
          "Simmer until pasta is tender.",
          "Stir in cheese."
        ]
      },

      {
        type: "quick",
        title: "Quesadilla Night",
        time: "10 minutes",
        ingredients: ["Tortillas", "Shredded cheese", "Cooked chicken or beans", "Salsa"],
        steps: [
          "Fill one half of each tortilla with cheese and chicken or beans.",
          "Fold and cook in a skillet until crisp and melted.",
          "Serve with salsa."
        ]
      },
      {
        type: "quick",
        title: "Loaded Baked Potato",
        time: "15–20 minutes",
        ingredients: ["Russet potatoes", "Cheese", "Sour cream", "Green onion", "Cooked bacon or beans"],
        steps: [
          "Microwave or bake potatoes until tender.",
          "Split open and fluff the inside.",
          "Add your toppings and serve."
        ]
      },
      {
        type: "quick",
        title: "Tuna Melt",
        time: "12 minutes",
        ingredients: ["Bread", "Canned tuna", "Mayonnaise", "Cheese", "Pickles or celery"],
        steps: [
          "Mix tuna with mayonnaise and chopped pickles or celery.",
          "Spread on bread and top with cheese.",
          "Toast in a skillet or oven until hot and melted."
        ]
      },
      {
        type: "quick",
        title: "Personal Pizza",
        time: "15 minutes",
        ingredients: ["Naan or flatbread", "Pizza sauce", "Mozzarella", "Pepperoni or vegetables"],
        steps: [
          "Spread sauce on flatbread.",
          "Add cheese and toppings.",
          "Bake until crisp and melted."
        ]
      },
      {
        type: "quick",
        title: "Chicken Ranch Wrap",
        time: "10 minutes",
        ingredients: ["Cooked chicken", "Ranch dressing", "Lettuce", "Cheese", "Tortilla"],
        steps: [
          "Combine chicken, ranch, lettuce, and cheese.",
          "Wrap tightly and serve."
        ]
      },
      {
        type: "quick",
        title: "Egg Fried Rice",
        time: "15 minutes",
        ingredients: ["Cooked rice", "Eggs", "Frozen peas and carrots", "Soy sauce", "Green onion"],
        steps: [
          "Scramble eggs in a skillet.",
          "Add vegetables and rice.",
          "Stir in soy sauce and cook until hot."
        ]
      },
      {
        type: "quick",
        title: "Pesto Pasta",
        time: "15 minutes",
        ingredients: ["Pasta", "Pesto", "Parmesan", "Cherry tomatoes"],
        steps: [
          "Cook pasta.",
          "Toss with pesto and tomatoes.",
          "Top with Parmesan."
        ]
      },
      {
        type: "quick",
        title: "Nacho Plate",
        time: "12 minutes",
        ingredients: ["Tortilla chips", "Cheese", "Black beans", "Salsa", "Jalapeños"],
        steps: [
          "Spread chips on a sheet pan.",
          "Top with cheese and beans.",
          "Bake until melted, then add salsa and jalapeños."
        ]
      },
      {
        type: "quick",
        title: "Rotisserie Chicken Bowl",
        time: "10 minutes",
        ingredients: ["Rotisserie chicken", "Microwave rice", "Frozen vegetables", "Sauce of choice"],
        steps: [
          "Heat rice and vegetables.",
          "Top with shredded chicken.",
          "Finish with your favorite sauce."
        ]
      },
      {
        type: "quick",
        title: "Peanut Butter Banana Toast",
        time: "5 minutes",
        ingredients: ["Bread", "Peanut butter", "Banana", "Cinnamon"],
        steps: [
          "Toast the bread.",
          "Spread with peanut butter.",
          "Top with sliced banana and cinnamon."
        ]
      },

      {
        type: "breakfast",
        title: "Biscuits & Sausage Gravy",
        time: "30 minutes",
        ingredients: ["Biscuits", "Breakfast sausage", "Flour", "Milk", "Black pepper"],
        steps: [
          "Bake biscuits according to package directions.",
          "Brown sausage in a skillet.",
          "Stir in flour, then slowly add milk.",
          "Simmer until thick and season with black pepper."
        ]
      },
      {
        type: "breakfast",
        title: "Hash Brown Breakfast Skillet",
        time: "25 minutes",
        ingredients: ["Frozen hash browns", "Eggs", "Cheddar cheese", "Onion", "Breakfast sausage"],
        steps: [
          "Brown sausage and onion.",
          "Add hash browns and cook until crisp.",
          "Make small wells and crack in the eggs.",
          "Cover until eggs set, then add cheese."
        ]
      },
      {
        type: "breakfast",
        title: "Apple Cinnamon Pancakes",
        time: "20 minutes",
        ingredients: ["Pancake mix", "Apple", "Cinnamon", "Milk", "Maple syrup"],
        steps: [
          "Prepare pancake batter.",
          "Fold in finely diced apple and cinnamon.",
          "Cook on a hot griddle until golden.",
          "Serve with maple syrup."
        ]
      },
      {
        type: "breakfast",
        title: "Ham & Cheese Egg Muffins",
        time: "30 minutes",
        ingredients: ["Eggs", "Ham", "Cheddar cheese", "Bell pepper", "Cooking spray"],
        steps: [
          "Heat oven to 375°F.",
          "Whisk eggs and stir in chopped ham, cheese, and pepper.",
          "Pour into a greased muffin tin.",
          "Bake until set."
        ]
      },
      {
        type: "breakfast",
        title: "Cinnamon Roll French Toast Bake",
        time: "40 minutes",
        ingredients: ["Cinnamon rolls", "Eggs", "Milk", "Vanilla", "Maple syrup"],
        steps: [
          "Cut cinnamon rolls into pieces and place in a baking dish.",
          "Whisk eggs, milk, and vanilla.",
          "Pour over the rolls and bake until set.",
          "Drizzle with icing and syrup."
        ]
      },

      {
        type: "lunch",
        title: "Buffalo Chicken Wrap",
        time: "15 minutes",
        ingredients: ["Cooked chicken", "Buffalo sauce", "Lettuce", "Cheese", "Ranch dressing", "Tortillas"],
        steps: [
          "Toss chicken with buffalo sauce.",
          "Add chicken, lettuce, cheese, and ranch to tortillas.",
          "Wrap tightly and serve."
        ]
      },
      {
        type: "lunch",
        title: "Italian Sub Sandwich",
        time: "10 minutes",
        ingredients: ["Sub rolls", "Ham", "Salami", "Provolone", "Lettuce", "Tomato", "Italian dressing"],
        steps: [
          "Layer meats and cheese on the roll.",
          "Add lettuce and tomato.",
          "Drizzle lightly with Italian dressing."
        ]
      },
      {
        type: "lunch",
        title: "Broccoli Cheddar Soup",
        time: "30 minutes",
        ingredients: ["Broccoli", "Cheddar cheese", "Milk", "Chicken broth", "Onion", "Butter"],
        steps: [
          "Cook onion in butter until soft.",
          "Add broth and broccoli and simmer until tender.",
          "Stir in milk and cheese.",
          "Heat gently until creamy."
        ]
      },
      {
        type: "lunch",
        title: "Chicken Noodle Soup",
        time: "35 minutes",
        ingredients: ["Cooked chicken", "Egg noodles", "Carrots", "Celery", "Chicken broth", "Onion"],
        steps: [
          "Cook onion, carrots, and celery until slightly softened.",
          "Add broth and simmer.",
          "Stir in chicken and noodles.",
          "Cook until noodles are tender."
        ]
      },
      {
        type: "lunch",
        title: "Philly Cheesesteak Sliders",
        time: "25 minutes",
        ingredients: ["Slider rolls", "Thin-sliced beef", "Provolone", "Bell pepper", "Onion"],
        steps: [
          "Cook beef, peppers, and onion.",
          "Fill slider rolls with the mixture and cheese.",
          "Bake until hot and melted."
        ]
      },
      {
        type: "lunch",
        title: "Baked Ham & Cheese Pinwheels",
        time: "25 minutes",
        ingredients: ["Crescent dough", "Ham", "Swiss cheese", "Mustard"],
        steps: [
          "Unroll dough and layer with ham and cheese.",
          "Roll tightly and slice.",
          "Bake until golden.",
          "Serve with mustard."
        ]
      },

      {
        type: "dinner",
        title: "Pot Roast with Vegetables",
        time: "3–4 hours",
        ingredients: ["Chuck roast", "Potatoes", "Carrots", "Onion", "Beef broth"],
        steps: [
          "Season and brown the roast if desired.",
          "Place roast, vegetables, and broth in a covered pot.",
          "Cook low and slow until fork-tender."
        ]
      },
      {
        type: "dinner",
        title: "Chicken Pot Pie",
        time: "45 minutes",
        ingredients: ["Cooked chicken", "Mixed vegetables", "Cream of chicken soup", "Pie crust", "Milk"],
        steps: [
          "Mix chicken, vegetables, soup, and a splash of milk.",
          "Pour into a pie dish and top with crust.",
          "Bake until bubbling and golden."
        ]
      },
      {
        type: "dinner",
        title: "Stuffed Bell Peppers",
        time: "45 minutes",
        ingredients: ["Bell peppers", "Ground beef", "Rice", "Tomato sauce", "Cheese"],
        steps: [
          "Brown beef and mix with cooked rice and tomato sauce.",
          "Fill halved or hollowed peppers.",
          "Top with cheese and bake until tender."
        ]
      },
      {
        type: "dinner",
        title: "Honey Garlic Chicken",
        time: "30 minutes",
        ingredients: ["Chicken thighs", "Honey", "Soy sauce", "Garlic", "Rice"],
        steps: [
          "Brown chicken in a skillet.",
          "Mix honey, soy sauce, and garlic.",
          "Pour over chicken and simmer until glazed and cooked through.",
          "Serve over rice."
        ]
      },
      {
        type: "dinner",
        title: "Creamy Tuscan Chicken",
        time: "35 minutes",
        ingredients: ["Chicken breasts", "Heavy cream", "Spinach", "Sun-dried tomatoes", "Garlic", "Parmesan"],
        steps: [
          "Cook chicken until browned and cooked through.",
          "Remove chicken and cook garlic briefly.",
          "Add cream, Parmesan, tomatoes, and spinach.",
          "Return chicken to the sauce and simmer."
        ]
      },
      {
        type: "dinner",
        title: "Chicken Enchiladas",
        time: "40 minutes",
        ingredients: ["Cooked chicken", "Tortillas", "Enchilada sauce", "Cheese", "Onion"],
        steps: [
          "Fill tortillas with chicken, cheese, and onion.",
          "Roll and place in a baking dish.",
          "Cover with enchilada sauce and more cheese.",
          "Bake until bubbly."
        ]
      },
      {
        type: "dinner",
        title: "Beef Stroganoff",
        time: "35 minutes",
        ingredients: ["Ground beef or sliced beef", "Egg noodles", "Mushrooms", "Sour cream", "Beef broth"],
        steps: [
          "Brown beef and mushrooms.",
          "Add broth and simmer.",
          "Stir in sour cream off the heat.",
          "Serve over cooked egg noodles."
        ]
      },
      {
        type: "dinner",
        title: "Lasagna",
        time: "70 minutes",
        ingredients: ["Lasagna noodles", "Ground beef", "Pasta sauce", "Ricotta", "Mozzarella", "Parmesan"],
        steps: [
          "Brown beef and combine with pasta sauce.",
          "Layer noodles, sauce, ricotta, and mozzarella.",
          "Repeat layers and top with Parmesan.",
          "Bake until bubbling and set."
        ]
      },
      {
        type: "dinner",
        title: "Shrimp Scampi",
        time: "20 minutes",
        ingredients: ["Shrimp", "Pasta", "Butter", "Garlic", "Lemon", "Parsley"],
        steps: [
          "Cook pasta.",
          "Sauté garlic in butter.",
          "Add shrimp and cook until pink.",
          "Toss with pasta, lemon juice, and parsley."
        ]
      },
      {
        type: "dinner",
        title: "Fish Tacos",
        time: "25 minutes",
        ingredients: ["White fish", "Tortillas", "Cabbage slaw", "Lime", "Sour cream", "Taco seasoning"],
        steps: [
          "Season and cook fish.",
          "Warm tortillas.",
          "Fill with fish and cabbage slaw.",
          "Finish with lime and sour cream."
        ]
      },
      {
        type: "dinner",
        title: "Teriyaki Chicken Bowls",
        time: "30 minutes",
        ingredients: ["Chicken breast", "Teriyaki sauce", "Rice", "Broccoli", "Carrots"],
        steps: [
          "Cook rice.",
          "Cook chicken and vegetables.",
          "Add teriyaki sauce and simmer briefly.",
          "Serve over rice."
        ]
      },
      {
        type: "dinner",
        title: "Pork Chops with Apples",
        time: "30 minutes",
        ingredients: ["Pork chops", "Apples", "Onion", "Butter", "Brown sugar", "Cinnamon"],
        steps: [
          "Brown pork chops and set aside.",
          "Cook apples and onion with butter.",
          "Add a little brown sugar and cinnamon.",
          "Return pork chops and cook until done."
        ]
      },
      {
        type: "dinner",
        title: "Baked Ziti",
        time: "45 minutes",
        ingredients: ["Ziti", "Pasta sauce", "Ricotta", "Mozzarella", "Ground beef"],
        steps: [
          "Cook pasta and brown beef.",
          "Mix pasta with sauce and ricotta.",
          "Top with mozzarella.",
          "Bake until bubbling."
        ]
      },
      {
        type: "dinner",
        title: "Cajun Sausage Pasta",
        time: "30 minutes",
        ingredients: ["Smoked sausage", "Pasta", "Heavy cream", "Cajun seasoning", "Bell pepper", "Parmesan"],
        steps: [
          "Cook pasta.",
          "Brown sliced sausage and bell pepper.",
          "Add cream and Cajun seasoning.",
          "Toss with pasta and Parmesan."
        ]
      },
      {
        type: "dinner",
        title: "Chicken Broccoli Casserole",
        time: "40 minutes",
        ingredients: ["Cooked chicken", "Broccoli", "Rice", "Cream of chicken soup", "Cheddar cheese"],
        steps: [
          "Combine chicken, broccoli, rice, and soup.",
          "Spread into a baking dish.",
          "Top with cheese and bake until hot."
        ]
      },
      {
        type: "dinner",
        title: "Pulled Pork Sandwiches",
        time: "4–6 hours",
        ingredients: ["Pork shoulder", "BBQ sauce", "Buns", "Coleslaw"],
        steps: [
          "Slow-cook pork until tender.",
          "Shred and mix with BBQ sauce.",
          "Serve on buns with coleslaw."
        ]
      },
      {
        type: "dinner",
        title: "Chicken & Dumplings",
        time: "45 minutes",
        ingredients: ["Cooked chicken", "Chicken broth", "Carrots", "Celery", "Biscuit dough"],
        steps: [
          "Simmer broth with carrots and celery.",
          "Add cooked chicken.",
          "Drop biscuit dough pieces on top.",
          "Cover and cook until dumplings are done."
        ]
      },
      {
        type: "dinner",
        title: "Shepherd’s Pie",
        time: "50 minutes",
        ingredients: ["Ground beef", "Mashed potatoes", "Mixed vegetables", "Beef gravy", "Cheddar cheese"],
        steps: [
          "Brown beef and mix with vegetables and gravy.",
          "Spread into a baking dish.",
          "Top with mashed potatoes and cheese.",
          "Bake until hot and lightly browned."
        ]
      },
      {
        type: "dinner",
        title: "Lemon Herb Chicken & Potatoes",
        time: "45 minutes",
        ingredients: ["Chicken thighs", "Baby potatoes", "Lemon", "Garlic", "Italian seasoning"],
        steps: [
          "Toss potatoes with oil and seasoning.",
          "Arrange with chicken in a baking dish.",
          "Add lemon and garlic.",
          "Bake until chicken is cooked and potatoes are tender."
        ]
      },

      {
        type: "quick",
        title: "English Muffin Pizzas",
        time: "12 minutes",
        ingredients: ["English muffins", "Pizza sauce", "Mozzarella", "Pepperoni"],
        steps: [
          "Split the muffins.",
          "Top with sauce, cheese, and pepperoni.",
          "Bake or air-fry until melted and crisp."
        ]
      },
      {
        type: "quick",
        title: "Chicken Caesar Pita",
        time: "10 minutes",
        ingredients: ["Pita bread", "Cooked chicken", "Romaine", "Caesar dressing", "Parmesan"],
        steps: [
          "Toss chicken and romaine with dressing.",
          "Stuff into pita halves.",
          "Top with Parmesan."
        ]
      },
      {
        type: "quick",
        title: "Microwave Nacho Bowl",
        time: "7 minutes",
        ingredients: ["Tortilla chips", "Cheese", "Black beans", "Salsa", "Sour cream"],
        steps: [
          "Layer chips, beans, and cheese in a microwave-safe bowl.",
          "Heat until cheese melts.",
          "Top with salsa and sour cream."
        ]
      },
      {
        type: "quick",
        title: "Ramen Egg Bowl",
        time: "10 minutes",
        ingredients: ["Instant ramen", "Egg", "Green onion", "Frozen vegetables", "Soy sauce"],
        steps: [
          "Cook ramen with vegetables.",
          "Add an egg during the last few minutes.",
          "Finish with green onion and a little soy sauce."
        ]
      },
      {
        type: "quick",
        title: "Turkey Ranch Roll-Ups",
        time: "8 minutes",
        ingredients: ["Tortillas", "Turkey", "Cheese", "Ranch dressing", "Lettuce"],
        steps: [
          "Spread ranch over tortillas.",
          "Layer turkey, cheese, and lettuce.",
          "Roll tightly and slice."
        ]
      },
      {
        type: "quick",
        title: "Garlic Parmesan Chicken Bites",
        time: "20 minutes",
        ingredients: ["Chicken breast", "Butter", "Garlic", "Parmesan", "Italian seasoning"],
        steps: [
          "Cut chicken into bite-size pieces.",
          "Cook in a skillet until browned.",
          "Add butter, garlic, Parmesan, and seasoning.",
          "Toss until coated."
        ]
      },
      {
        type: "quick",
        title: "Cheesy Taco Rice Bowl",
        time: "15 minutes",
        ingredients: ["Microwave rice", "Ground beef or turkey", "Taco seasoning", "Cheese", "Salsa"],
        steps: [
          "Brown and season the meat.",
          "Heat rice.",
          "Layer rice, meat, cheese, and salsa."
        ]
      },
      {
        type: "quick",
        title: "Tomato Mozzarella Toast",
        time: "10 minutes",
        ingredients: ["Bread", "Tomato", "Mozzarella", "Olive oil", "Italian seasoning"],
        steps: [
          "Top bread with tomato and mozzarella.",
          "Drizzle lightly with olive oil.",
          "Toast until the cheese melts.",
          "Sprinkle with Italian seasoning."
        ]
      }
    ];

const recipeImages = {
  "Breakfast Burrito": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2YxYmU2MiIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjY2U2ZDNjIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZmZmMGQyIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjEwIiBjeT0iMTMyIiByeD0iNjYiIHJ5PSIzOCIgZmlsbD0iI2Y0Yzg2ZiIvPjxjaXJjbGUgY3g9IjE5MCIgY3k9IjEyNyIgcj0iMTgiIGZpbGw9IiNmZmY3ZGIiLz48Y2lyY2xlIGN4PSIyMjIiIGN5PSIxMjkiIHI9IjE3IiBmaWxsPSIjZmZmN2RiIi8+PGNpcmNsZSBjeD0iMTkwIiBjeT0iMTI3IiByPSI4IiBmaWxsPSIjZjdiZjNkIi8+PGNpcmNsZSBjeD0iMjIyIiBjeT0iMTI5IiByPSI4IiBmaWxsPSIjZjdiZjNkIi8+CiAgICA8L3N2Zz4=",
  "Greek Yogurt Parfait": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzY5ODhhMCIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjYzA4YTU2Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZWVmMmY1Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE0IiBjeT0iMTI3IiByeD0iNjQiIHJ5PSIzOCIgZmlsbD0iIzc5OThhZCIvPjxjaXJjbGUgY3g9IjE4OCIgY3k9IjEyMiIgcj0iMTIiIGZpbGw9IiNkMjgxNTkiLz48Y2lyY2xlIGN4PSIyMTYiIGN5PSIxMzUiIHI9IjExIiBmaWxsPSIjZjBkNDdhIi8+PGNpcmNsZSBjeD0iMjQyIiBjeT0iMTE5IiByPSIxMiIgZmlsbD0iIzZmYTU2MSIvPgogICAgPC9zdmc+",
  "Loaded Scrambled Eggs": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2YxYmU2MiIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjY2U2ZDNjIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZmZmMGQyIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjEwIiBjeT0iMTMyIiByeD0iNjYiIHJ5PSIzOCIgZmlsbD0iI2Y0Yzg2ZiIvPjxjaXJjbGUgY3g9IjE5MCIgY3k9IjEyNyIgcj0iMTgiIGZpbGw9IiNmZmY3ZGIiLz48Y2lyY2xlIGN4PSIyMjIiIGN5PSIxMjkiIHI9IjE3IiBmaWxsPSIjZmZmN2RiIi8+PGNpcmNsZSBjeD0iMTkwIiBjeT0iMTI3IiByPSI4IiBmaWxsPSIjZjdiZjNkIi8+PGNpcmNsZSBjeD0iMjIyIiBjeT0iMTI5IiByPSI4IiBmaWxsPSIjZjdiZjNkIi8+CiAgICA8L3N2Zz4=",
  "Banana Peanut Butter Oatmeal": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2YxYmU2MiIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjY2U2ZDNjIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZmZmMGQyIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjEwIiBjeT0iMTMyIiByeD0iNjYiIHJ5PSIzOCIgZmlsbD0iI2Y0Yzg2ZiIvPjxjaXJjbGUgY3g9IjE5MCIgY3k9IjEyNyIgcj0iMTgiIGZpbGw9IiNmZmY3ZGIiLz48Y2lyY2xlIGN4PSIyMjIiIGN5PSIxMjkiIHI9IjE3IiBmaWxsPSIjZmZmN2RiIi8+PGNpcmNsZSBjeD0iMTkwIiBjeT0iMTI3IiByPSI4IiBmaWxsPSIjZjdiZjNkIi8+PGNpcmNsZSBjeD0iMjIyIiBjeT0iMTI5IiByPSI4IiBmaWxsPSIjZjdiZjNkIi8+CiAgICA8L3N2Zz4=",
  "French Toast": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2YxYmU2MiIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjY2U2ZDNjIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZmZmMGQyIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjEwIiBjeT0iMTMyIiByeD0iNjYiIHJ5PSIzOCIgZmlsbD0iI2Y0Yzg2ZiIvPjxjaXJjbGUgY3g9IjE5MCIgY3k9IjEyNyIgcj0iMTgiIGZpbGw9IiNmZmY3ZGIiLz48Y2lyY2xlIGN4PSIyMjIiIGN5PSIxMjkiIHI9IjE3IiBmaWxsPSIjZmZmN2RiIi8+PGNpcmNsZSBjeD0iMTkwIiBjeT0iMTI3IiByPSI4IiBmaWxsPSIjZjdiZjNkIi8+PGNpcmNsZSBjeD0iMjIyIiBjeT0iMTI5IiByPSI4IiBmaWxsPSIjZjdiZjNkIi8+CiAgICA8L3N2Zz4=",
  "Breakfast Sandwich": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2YxYmU2MiIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjY2U2ZDNjIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZmZmMGQyIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjEwIiBjeT0iMTMyIiByeD0iNjYiIHJ5PSIzOCIgZmlsbD0iI2Y0Yzg2ZiIvPjxjaXJjbGUgY3g9IjE5MCIgY3k9IjEyNyIgcj0iMTgiIGZpbGw9IiNmZmY3ZGIiLz48Y2lyY2xlIGN4PSIyMjIiIGN5PSIxMjkiIHI9IjE3IiBmaWxsPSIjZmZmN2RiIi8+PGNpcmNsZSBjeD0iMTkwIiBjeT0iMTI3IiByPSI4IiBmaWxsPSIjZjdiZjNkIi8+PGNpcmNsZSBjeD0iMjIyIiBjeT0iMTI5IiByPSI4IiBmaWxsPSIjZjdiZjNkIi8+CiAgICA8L3N2Zz4=",
  "Veggie Omelet": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2YxYmU2MiIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjY2U2ZDNjIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZmZmMGQyIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjEwIiBjeT0iMTMyIiByeD0iNjYiIHJ5PSIzOCIgZmlsbD0iI2Y0Yzg2ZiIvPjxjaXJjbGUgY3g9IjE5MCIgY3k9IjEyNyIgcj0iMTgiIGZpbGw9IiNmZmY3ZGIiLz48Y2lyY2xlIGN4PSIyMjIiIGN5PSIxMjkiIHI9IjE3IiBmaWxsPSIjZmZmN2RiIi8+PGNpcmNsZSBjeD0iMTkwIiBjeT0iMTI3IiByPSI4IiBmaWxsPSIjZjdiZjNkIi8+PGNpcmNsZSBjeD0iMjIyIiBjeT0iMTI5IiByPSI4IiBmaWxsPSIjZjdiZjNkIi8+CiAgICA8L3N2Zz4=",
  "Berry Smoothie": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzY5ODhhMCIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjYzA4YTU2Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZWVmMmY1Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE0IiBjeT0iMTI3IiByeD0iNjQiIHJ5PSIzOCIgZmlsbD0iIzc5OThhZCIvPjxjaXJjbGUgY3g9IjE4OCIgY3k9IjEyMiIgcj0iMTIiIGZpbGw9IiNkMjgxNTkiLz48Y2lyY2xlIGN4PSIyMTYiIGN5PSIxMzUiIHI9IjExIiBmaWxsPSIjZjBkNDdhIi8+PGNpcmNsZSBjeD0iMjQyIiBjeT0iMTE5IiByPSIxMiIgZmlsbD0iIzZmYTU2MSIvPgogICAgPC9zdmc+",
  "Chicken Caesar Wrap": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2MzOGQ0ZCIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjOGE0YjMxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZjJlMGI1Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjEyIiBjeT0iMTI2IiByeD0iNjQiIHJ5PSIzOCIgZmlsbD0iI2Q4YjE2NiIvPjxlbGxpcHNlIGN4PSIxOTQiIGN5PSIxMjQiIHJ4PSIyMiIgcnk9IjE1IiBmaWxsPSIjYjk3MjQzIi8+PGVsbGlwc2UgY3g9IjIyOCIgY3k9IjEyOCIgcng9IjIyIiByeT0iMTUiIGZpbGw9IiNiOTcyNDMiLz48Y2lyY2xlIGN4PSIyNDciIGN5PSIxMTYiIHI9IjkiIGZpbGw9IiM1ZmEwNTAiLz4KICAgIDwvc3ZnPg==",
  "Turkey Avocado Sandwich": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2QwOGEzOSIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjNmY0MTJiIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZjdkZmE3Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8cmVjdCB4PSIxNTIiIHk9IjEwNiIgd2lkdGg9IjExOCIgaGVpZ2h0PSIyNCIgcng9IjEyIiBmaWxsPSIjNmMzZjI4Ii8+PHJlY3QgeD0iMTQ2IiB5PSI5NSIgd2lkdGg9IjEzMCIgaGVpZ2h0PSIxOCIgcng9IjkiIGZpbGw9IiM3NGE2NGQiLz48cmVjdCB4PSIxNDgiIHk9Ijg0IiB3aWR0aD0iMTI2IiBoZWlnaHQ9IjE4IiByeD0iOSIgZmlsbD0iI2NjN2YzYyIvPjxwYXRoIGQ9Ik0xNDUgODNjOC0yNCAxMTQtMjQgMTMyIDBaIiBmaWxsPSIjZTBiODZmIi8+CiAgICA8L3N2Zz4=",
  "Grilled Cheese & Tomato Soup": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2QwOGEzOSIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjNmY0MTJiIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZjdkZmE3Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8cmVjdCB4PSIxNTIiIHk9IjEwNiIgd2lkdGg9IjExOCIgaGVpZ2h0PSIyNCIgcng9IjEyIiBmaWxsPSIjNmMzZjI4Ii8+PHJlY3QgeD0iMTQ2IiB5PSI5NSIgd2lkdGg9IjEzMCIgaGVpZ2h0PSIxOCIgcng9IjkiIGZpbGw9IiM3NGE2NGQiLz48cmVjdCB4PSIxNDgiIHk9Ijg0IiB3aWR0aD0iMTI2IiBoZWlnaHQ9IjE4IiByeD0iOSIgZmlsbD0iI2NjN2YzYyIvPjxwYXRoIGQ9Ik0xNDUgODNjOC0yNCAxMTQtMjQgMTMyIDBaIiBmaWxsPSIjZTBiODZmIi8+CiAgICA8L3N2Zz4=",
  "Chicken Salad Sandwich": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2QwOGEzOSIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjNmY0MTJiIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZjdkZmE3Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8cmVjdCB4PSIxNTIiIHk9IjEwNiIgd2lkdGg9IjExOCIgaGVpZ2h0PSIyNCIgcng9IjEyIiBmaWxsPSIjNmMzZjI4Ii8+PHJlY3QgeD0iMTQ2IiB5PSI5NSIgd2lkdGg9IjEzMCIgaGVpZ2h0PSIxOCIgcng9IjkiIGZpbGw9IiM3NGE2NGQiLz48cmVjdCB4PSIxNDgiIHk9Ijg0IiB3aWR0aD0iMTI2IiBoZWlnaHQ9IjE4IiByeD0iOSIgZmlsbD0iI2NjN2YzYyIvPjxwYXRoIGQ9Ik0xNDUgODNjOC0yNCAxMTQtMjQgMTMyIDBaIiBmaWxsPSIjZTBiODZmIi8+CiAgICA8L3N2Zz4=",
  "Taco Salad": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2Q0YTA0YiIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjNmNhMzRiIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZjZkOGE2Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8cGF0aCBkPSJNMTQ4IDEzNGMxMC00NiAxMDMtNTggMTI3IDBaIiBmaWxsPSIjZWZjMzViIi8+PHBhdGggZD0iTTE2MCAxMjhjMTctMjkgODAtMzggMTAyIDBaIiBmaWxsPSIjNWU5YzQ5Ii8+PGNpcmNsZSBjeD0iMTg3IiBjeT0iMTIyIiByPSI4IiBmaWxsPSIjZDk2NzU0Ii8+PGNpcmNsZSBjeD0iMjE0IiBjeT0iMTE4IiByPSI4IiBmaWxsPSIjZDk2NzU0Ii8+PGNpcmNsZSBjeD0iMjM3IiBjeT0iMTIzIiByPSI3IiBmaWxsPSIjZDk2NzU0Ii8+CiAgICA8L3N2Zz4=",
  "Ham & Cheese Melt": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2QwOGEzOSIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjNmY0MTJiIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZjdkZmE3Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8cmVjdCB4PSIxNTIiIHk9IjEwNiIgd2lkdGg9IjExOCIgaGVpZ2h0PSIyNCIgcng9IjEyIiBmaWxsPSIjNmMzZjI4Ii8+PHJlY3QgeD0iMTQ2IiB5PSI5NSIgd2lkdGg9IjEzMCIgaGVpZ2h0PSIxOCIgcng9IjkiIGZpbGw9IiM3NGE2NGQiLz48cmVjdCB4PSIxNDgiIHk9Ijg0IiB3aWR0aD0iMTI2IiBoZWlnaHQ9IjE4IiByeD0iOSIgZmlsbD0iI2NjN2YzYyIvPjxwYXRoIGQ9Ik0xNDUgODNjOC0yNCAxMTQtMjQgMTMyIDBaIiBmaWxsPSIjZTBiODZmIi8+CiAgICA8L3N2Zz4=",
  "Mediterranean Chickpea Bowl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzY4YTQ2ZCIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjZDY2MzRmIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZWRmN2Q2Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8cGF0aCBkPSJNMTU1IDEyMmMwLTI0IDI4LTQyIDYwLTQyczYwIDE4IDYwIDQyLTI4IDQyLTYwIDQyLTYwLTE4LTYwLTQyWiIgZmlsbD0iIzc4YWQ2MyIvPjxjaXJjbGUgY3g9IjE5MCIgY3k9IjEyMCIgcj0iMTAiIGZpbGw9IiNlNjcyNTYiLz48Y2lyY2xlIGN4PSIyMTYiIGN5PSIxMzgiIHI9IjkiIGZpbGw9IiNmMGRiN2YiLz48Y2lyY2xlIGN4PSIyMzQiIGN5PSIxMDkiIHI9IjgiIGZpbGw9IiNlNjcyNTYiLz48Y2lyY2xlIGN4PSIxNzUiIGN5PSIxMzkiIHI9IjgiIGZpbGw9IiNmMGRiN2YiLz4KICAgIDwvc3ZnPg==",
  "BLT Wrap": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzY5ODhhMCIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjYzA4YTU2Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZWVmMmY1Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE0IiBjeT0iMTI3IiByeD0iNjQiIHJ5PSIzOCIgZmlsbD0iIzc5OThhZCIvPjxjaXJjbGUgY3g9IjE4OCIgY3k9IjEyMiIgcj0iMTIiIGZpbGw9IiNkMjgxNTkiLz48Y2lyY2xlIGN4PSIyMTYiIGN5PSIxMzUiIHI9IjExIiBmaWxsPSIjZjBkNDdhIi8+PGNpcmNsZSBjeD0iMjQyIiBjeT0iMTE5IiByPSIxMiIgZmlsbD0iIzZmYTU2MSIvPgogICAgPC9zdmc+",
  "Sheet-Pan Chicken & Vegetables": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2MzOGQ0ZCIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjOGE0YjMxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZjJlMGI1Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjEyIiBjeT0iMTI2IiByeD0iNjQiIHJ5PSIzOCIgZmlsbD0iI2Q4YjE2NiIvPjxlbGxpcHNlIGN4PSIxOTQiIGN5PSIxMjQiIHJ4PSIyMiIgcnk9IjE1IiBmaWxsPSIjYjk3MjQzIi8+PGVsbGlwc2UgY3g9IjIyOCIgY3k9IjEyOCIgcng9IjIyIiByeT0iMTUiIGZpbGw9IiNiOTcyNDMiLz48Y2lyY2xlIGN4PSIyNDciIGN5PSIxMTYiIHI9IjkiIGZpbGw9IiM1ZmEwNTAiLz4KICAgIDwvc3ZnPg==",
  "One-Pan Beef Tacos": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2Q0YTA0YiIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjNmNhMzRiIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZjZkOGE2Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8cGF0aCBkPSJNMTQ4IDEzNGMxMC00NiAxMDMtNTggMTI3IDBaIiBmaWxsPSIjZWZjMzViIi8+PHBhdGggZD0iTTE2MCAxMjhjMTctMjkgODAtMzggMTAyIDBaIiBmaWxsPSIjNWU5YzQ5Ii8+PGNpcmNsZSBjeD0iMTg3IiBjeT0iMTIyIiByPSI4IiBmaWxsPSIjZDk2NzU0Ii8+PGNpcmNsZSBjeD0iMjE0IiBjeT0iMTE4IiByPSI4IiBmaWxsPSIjZDk2NzU0Ii8+PGNpcmNsZSBjeD0iMjM3IiBjeT0iMTIzIiByPSI3IiBmaWxsPSIjZDk2NzU0Ii8+CiAgICA8L3N2Zz4=",
  "Garlic Butter Pasta": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2Q3YjQ2MCIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjYWY1NTMxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZjRlNmJkIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8cGF0aCBkPSJNMTU1IDEyMmMwLTIyIDI4LTM2IDYwLTM2czYwIDE0IDYwIDM2LTI4IDM2LTYwIDM2LTYwLTE0LTYwLTM2WiIgZmlsbD0iI2YwY2Y3NCIvPjxwYXRoIGQ9Ik0xNjUgMTIwYzE4LTE4IDc3LTE4IDk3IDBNMTcwIDEzM2MxOC0xOCA2Ny0xOCA4NyAwIiBzdHJva2U9IiNjODdlM2IiIHN0cm9rZS13aWR0aD0iNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgICA8L3N2Zz4=",
  "Baked Spaghetti": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2Q3YjQ2MCIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjYWY1NTMxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZjRlNmJkIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8cGF0aCBkPSJNMTU1IDEyMmMwLTIyIDI4LTM2IDYwLTM2czYwIDE0IDYwIDM2LTI4IDM2LTYwIDM2LTYwLTE0LTYwLTM2WiIgZmlsbD0iI2YwY2Y3NCIvPjxwYXRoIGQ9Ik0xNjUgMTIwYzE4LTE4IDc3LTE4IDk3IDBNMTcwIDEzM2MxOC0xOCA2Ny0xOCA4NyAwIiBzdHJva2U9IiNjODdlM2IiIHN0cm9rZS13aWR0aD0iNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgICA8L3N2Zz4=",
  "Chicken Alfredo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2Q3YjQ2MCIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjYWY1NTMxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZjRlNmJkIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8cGF0aCBkPSJNMTU1IDEyMmMwLTIyIDI4LTM2IDYwLTM2czYwIDE0IDYwIDM2LTI4IDM2LTYwIDM2LTYwLTE0LTYwLTM2WiIgZmlsbD0iI2YwY2Y3NCIvPjxwYXRoIGQ9Ik0xNjUgMTIwYzE4LTE4IDc3LTE4IDk3IDBNMTcwIDEzM2MxOC0xOCA2Ny0xOCA4NyAwIiBzdHJva2U9IiNjODdlM2IiIHN0cm9rZS13aWR0aD0iNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgICA8L3N2Zz4=",
  "Meatloaf & Mashed Potatoes": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzdiM2YzOSIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjZDlhZDY4Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZWRlMWNhIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE0IiBjeT0iMTI3IiByeD0iNjQiIHJ5PSIzOCIgZmlsbD0iIzc3NDEzYSIvPjxlbGxpcHNlIGN4PSIyMTAiIGN5PSIxMjciIHJ4PSI0MiIgcnk9IjIyIiBmaWxsPSIjOTQ1MTQ4Ii8+PHBhdGggZD0iTTE4MyAxMjdjMTIgMTAgNDUgMTAgNTctMSIgc3Ryb2tlPSIjY2Y5ZTcyIiBzdHJva2Utd2lkdGg9IjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogICAgPC9zdmc+",
  "BBQ Chicken Sandwiches": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2QwOGEzOSIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjNmY0MTJiIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZjdkZmE3Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8cmVjdCB4PSIxNTIiIHk9IjEwNiIgd2lkdGg9IjExOCIgaGVpZ2h0PSIyNCIgcng9IjEyIiBmaWxsPSIjNmMzZjI4Ii8+PHJlY3QgeD0iMTQ2IiB5PSI5NSIgd2lkdGg9IjEzMCIgaGVpZ2h0PSIxOCIgcng9IjkiIGZpbGw9IiM3NGE2NGQiLz48cmVjdCB4PSIxNDgiIHk9Ijg0IiB3aWR0aD0iMTI2IiBoZWlnaHQ9IjE4IiByeD0iOSIgZmlsbD0iI2NjN2YzYyIvPjxwYXRoIGQ9Ik0xNDUgODNjOC0yNCAxMTQtMjQgMTMyIDBaIiBmaWxsPSIjZTBiODZmIi8+CiAgICA8L3N2Zz4=",
  "Beef & Broccoli Stir-Fry": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzdiM2YzOSIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjZDlhZDY4Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZWRlMWNhIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE0IiBjeT0iMTI3IiByeD0iNjQiIHJ5PSIzOCIgZmlsbD0iIzc3NDEzYSIvPjxlbGxpcHNlIGN4PSIyMTAiIGN5PSIxMjciIHJ4PSI0MiIgcnk9IjIyIiBmaWxsPSIjOTQ1MTQ4Ii8+PHBhdGggZD0iTTE4MyAxMjdjMTIgMTAgNDUgMTAgNTctMSIgc3Ryb2tlPSIjY2Y5ZTcyIiBzdHJva2Utd2lkdGg9IjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogICAgPC9zdmc+",
  "Chicken Parmesan": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2MzOGQ0ZCIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjOGE0YjMxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZjJlMGI1Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjEyIiBjeT0iMTI2IiByeD0iNjQiIHJ5PSIzOCIgZmlsbD0iI2Q4YjE2NiIvPjxlbGxpcHNlIGN4PSIxOTQiIGN5PSIxMjQiIHJ4PSIyMiIgcnk9IjE1IiBmaWxsPSIjYjk3MjQzIi8+PGVsbGlwc2UgY3g9IjIyOCIgY3k9IjEyOCIgcng9IjIyIiByeT0iMTUiIGZpbGw9IiNiOTcyNDMiLz48Y2lyY2xlIGN4PSIyNDciIGN5PSIxMTYiIHI9IjkiIGZpbGw9IiM1ZmEwNTAiLz4KICAgIDwvc3ZnPg==",
  "Sausage & Peppers": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2JkODA3MCIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjZGNiNDhjIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZjNlMmQxIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE0IiBjeT0iMTI3IiByeD0iNjIiIHJ5PSIzOCIgZmlsbD0iI2M0ODY3NiIvPjxlbGxpcHNlIGN4PSIyMTAiIGN5PSIxMjYiIHJ4PSI0MCIgcnk9IjIyIiBmaWxsPSIjZGVhYjlhIi8+PGNpcmNsZSBjeD0iMjM1IiBjeT0iMTE0IiByPSI3IiBmaWxsPSIjZjJkYmI5Ii8+CiAgICA8L3N2Zz4=",
  "Homestyle Chili": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2Q5OGM1MyIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjNmUzYTJhIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZjJkNWE2Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8cGF0aCBkPSJNMTYwIDExMGgxMTBjMCAzNi0xOCA2MC01NSA2MHMtNTUtMjQtNTUtNjBaIiBmaWxsPSIjZDY4MDQ5Ii8+PHBhdGggZD0iTTE1NCAxMDloMTIyIiBzdHJva2U9IiNmN2U3YzUiIHN0cm9rZS13aWR0aD0iOSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGNpcmNsZSBjeD0iMTg4IiBjeT0iMTI4IiByPSI2IiBmaWxsPSIjZjBkNThiIi8+PGNpcmNsZSBjeD0iMjE1IiBjeT0iMTM4IiByPSI3IiBmaWxsPSIjZjBkNThiIi8+PGNpcmNsZSBjeD0iMjM3IiBjeT0iMTI2IiByPSI2IiBmaWxsPSIjZjBkNThiIi8+CiAgICA8L3N2Zz4=",
  "Chicken Fajitas": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2Q0YTA0YiIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjNmNhMzRiIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZjZkOGE2Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8cGF0aCBkPSJNMTQ4IDEzNGMxMC00NiAxMDMtNTggMTI3IDBaIiBmaWxsPSIjZWZjMzViIi8+PHBhdGggZD0iTTE2MCAxMjhjMTctMjkgODAtMzggMTAyIDBaIiBmaWxsPSIjNWU5YzQ5Ii8+PGNpcmNsZSBjeD0iMTg3IiBjeT0iMTIyIiByPSI4IiBmaWxsPSIjZDk2NzU0Ii8+PGNpcmNsZSBjeD0iMjE0IiBjeT0iMTE4IiByPSI4IiBmaWxsPSIjZDk2NzU0Ii8+PGNpcmNsZSBjeD0iMjM3IiBjeT0iMTIzIiByPSI3IiBmaWxsPSIjZDk2NzU0Ii8+CiAgICA8L3N2Zz4=",
  "Baked Salmon & Rice": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzZmYTZjOCIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjZGQ4NzY4Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZTNmMmZiIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjEzIiBjeT0iMTI2IiByeD0iNTUiIHJ5PSIzNCIgZmlsbD0iIzc4YjVkOSIvPjxwYXRoIGQ9Ik0xNjAgMTI2YzEyLTIyIDQwLTM0IDY4LTM0IDE5IDAgMzUgNyA0NiAxOS0xMCAxOC0zNSA0MS03NCA0MS0xOSAwLTM4LTgtNTItMjZaIiBmaWxsPSIjZTI4YjZlIi8+PGNpcmNsZSBjeD0iMjQxIiBjeT0iMTE1IiByPSI0IiBmaWxsPSIjMWYzMzQ5Ii8+CiAgICA8L3N2Zz4=",
  "Sloppy Joes": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2QwOGEzOSIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjNmY0MTJiIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZjdkZmE3Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8cmVjdCB4PSIxNTIiIHk9IjEwNiIgd2lkdGg9IjExOCIgaGVpZ2h0PSIyNCIgcng9IjEyIiBmaWxsPSIjNmMzZjI4Ii8+PHJlY3QgeD0iMTQ2IiB5PSI5NSIgd2lkdGg9IjEzMCIgaGVpZ2h0PSIxOCIgcng9IjkiIGZpbGw9IiM3NGE2NGQiLz48cmVjdCB4PSIxNDgiIHk9Ijg0IiB3aWR0aD0iMTI2IiBoZWlnaHQ9IjE4IiByeD0iOSIgZmlsbD0iI2NjN2YzYyIvPjxwYXRoIGQ9Ik0xNDUgODNjOC0yNCAxMTQtMjQgMTMyIDBaIiBmaWxsPSIjZTBiODZmIi8+CiAgICA8L3N2Zz4=",
  "Chicken & Rice Casserole": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2MzOGQ0ZCIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjOGE0YjMxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZjJlMGI1Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjEyIiBjeT0iMTI2IiByeD0iNjQiIHJ5PSIzOCIgZmlsbD0iI2Q4YjE2NiIvPjxlbGxpcHNlIGN4PSIxOTQiIGN5PSIxMjQiIHJ4PSIyMiIgcnk9IjE1IiBmaWxsPSIjYjk3MjQzIi8+PGVsbGlwc2UgY3g9IjIyOCIgY3k9IjEyOCIgcng9IjIyIiByeT0iMTUiIGZpbGw9IiNiOTcyNDMiLz48Y2lyY2xlIGN4PSIyNDciIGN5PSIxMTYiIHI9IjkiIGZpbGw9IiM1ZmEwNTAiLz4KICAgIDwvc3ZnPg==",
  "Cheeseburger Skillet": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2QwOGEzOSIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjNmY0MTJiIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZjdkZmE3Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8cmVjdCB4PSIxNTIiIHk9IjEwNiIgd2lkdGg9IjExOCIgaGVpZ2h0PSIyNCIgcng9IjEyIiBmaWxsPSIjNmMzZjI4Ii8+PHJlY3QgeD0iMTQ2IiB5PSI5NSIgd2lkdGg9IjEzMCIgaGVpZ2h0PSIxOCIgcng9IjkiIGZpbGw9IiM3NGE2NGQiLz48cmVjdCB4PSIxNDgiIHk9Ijg0IiB3aWR0aD0iMTI2IiBoZWlnaHQ9IjE4IiByeD0iOSIgZmlsbD0iI2NjN2YzYyIvPjxwYXRoIGQ9Ik0xNDUgODNjOC0yNCAxMTQtMjQgMTMyIDBaIiBmaWxsPSIjZTBiODZmIi8+CiAgICA8L3N2Zz4=",
  "Quesadilla Night": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2Q0YTA0YiIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjNmNhMzRiIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZjZkOGE2Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8cGF0aCBkPSJNMTQ4IDEzNGMxMC00NiAxMDMtNTggMTI3IDBaIiBmaWxsPSIjZWZjMzViIi8+PHBhdGggZD0iTTE2MCAxMjhjMTctMjkgODAtMzggMTAyIDBaIiBmaWxsPSIjNWU5YzQ5Ii8+PGNpcmNsZSBjeD0iMTg3IiBjeT0iMTIyIiByPSI4IiBmaWxsPSIjZDk2NzU0Ii8+PGNpcmNsZSBjeD0iMjE0IiBjeT0iMTE4IiByPSI4IiBmaWxsPSIjZDk2NzU0Ii8+PGNpcmNsZSBjeD0iMjM3IiBjeT0iMTIzIiByPSI3IiBmaWxsPSIjZDk2NzU0Ii8+CiAgICA8L3N2Zz4=",
  "Loaded Baked Potato": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2I5OGM1NCIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjNzQ0ZjMxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZjRlM2JmIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE0IiBjeT0iMTI3IiByeD0iNjIiIHJ5PSIzOCIgZmlsbD0iI2QwYWM2OSIvPjxjaXJjbGUgY3g9IjE5NCIgY3k9IjEyNiIgcj0iMTgiIGZpbGw9IiNiODg2NDIiLz48Y2lyY2xlIGN4PSIyMjAiIGN5PSIxMTgiIHI9IjE2IiBmaWxsPSIjYjg4NjQyIi8+PGNpcmNsZSBjeD0iMjQwIiBjeT0iMTMzIiByPSIxNSIgZmlsbD0iI2I4ODY0MiIvPgogICAgPC9zdmc+",
  "Tuna Melt": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2QwOGEzOSIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjNmY0MTJiIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZjdkZmE3Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8cmVjdCB4PSIxNTIiIHk9IjEwNiIgd2lkdGg9IjExOCIgaGVpZ2h0PSIyNCIgcng9IjEyIiBmaWxsPSIjNmMzZjI4Ii8+PHJlY3QgeD0iMTQ2IiB5PSI5NSIgd2lkdGg9IjEzMCIgaGVpZ2h0PSIxOCIgcng9IjkiIGZpbGw9IiM3NGE2NGQiLz48cmVjdCB4PSIxNDgiIHk9Ijg0IiB3aWR0aD0iMTI2IiBoZWlnaHQ9IjE4IiByeD0iOSIgZmlsbD0iI2NjN2YzYyIvPjxwYXRoIGQ9Ik0xNDUgODNjOC0yNCAxMTQtMjQgMTMyIDBaIiBmaWxsPSIjZTBiODZmIi8+CiAgICA8L3N2Zz4=",
  "Personal Pizza": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2RhOGQ1OCIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjOWMzZDM1Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZjRkMmFiIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8cGF0aCBkPSJNMTU5IDkyIDI3NyAxMTcgMTg5IDE2N1oiIGZpbGw9IiNlMGIzNmUiLz48cGF0aCBkPSJNMTYwIDkyYzE4IDQgMTAzIDIwIDExNyAyNSIgc3Ryb2tlPSIjYzU3YTQzIiBzdHJva2Utd2lkdGg9IjEyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48Y2lyY2xlIGN4PSIyMDkiIGN5PSIxMTgiIHI9IjciIGZpbGw9IiNiNjQyMzkiLz48Y2lyY2xlIGN4PSIyMjgiIGN5PSIxMjciIHI9IjciIGZpbGw9IiNiNjQyMzkiLz48Y2lyY2xlIGN4PSIyMDQiIGN5PSIxNDEiIHI9IjciIGZpbGw9IiNiNjQyMzkiLz4KICAgIDwvc3ZnPg==",
  "Chicken Ranch Wrap": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2MzOGQ0ZCIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjOGE0YjMxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZjJlMGI1Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjEyIiBjeT0iMTI2IiByeD0iNjQiIHJ5PSIzOCIgZmlsbD0iI2Q4YjE2NiIvPjxlbGxpcHNlIGN4PSIxOTQiIGN5PSIxMjQiIHJ4PSIyMiIgcnk9IjE1IiBmaWxsPSIjYjk3MjQzIi8+PGVsbGlwc2UgY3g9IjIyOCIgY3k9IjEyOCIgcng9IjIyIiByeT0iMTUiIGZpbGw9IiNiOTcyNDMiLz48Y2lyY2xlIGN4PSIyNDciIGN5PSIxMTYiIHI9IjkiIGZpbGw9IiM1ZmEwNTAiLz4KICAgIDwvc3ZnPg==",
  "Egg Fried Rice": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2NmYWE1ZCIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjYmI2ZDNkIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZjRlY2QzIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE0IiBjeT0iMTI3IiByeD0iNjIiIHJ5PSIzOCIgZmlsbD0iI2U3ZDY5YiIvPjxwYXRoIGQ9Ik0xNjQgMTI5YzExLTEyIDI5LTE4IDQ2LTE4IDIzIDAgMzQgNiA1NiAxOCIgc3Ryb2tlPSIjZDE3ZDQzIiBzdHJva2Utd2lkdGg9IjExIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48Y2lyY2xlIGN4PSIxODciIGN5PSIxMjAiIHI9IjciIGZpbGw9IiM2ZmE0NGQiLz48Y2lyY2xlIGN4PSIyMzYiIGN5PSIxMjMiIHI9IjYiIGZpbGw9IiM2ZmE0NGQiLz4KICAgIDwvc3ZnPg==",
  "Pesto Pasta": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2Q3YjQ2MCIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjYWY1NTMxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZjRlNmJkIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8cGF0aCBkPSJNMTU1IDEyMmMwLTIyIDI4LTM2IDYwLTM2czYwIDE0IDYwIDM2LTI4IDM2LTYwIDM2LTYwLTE0LTYwLTM2WiIgZmlsbD0iI2YwY2Y3NCIvPjxwYXRoIGQ9Ik0xNjUgMTIwYzE4LTE4IDc3LTE4IDk3IDBNMTcwIDEzM2MxOC0xOCA2Ny0xOCA4NyAwIiBzdHJva2U9IiNjODdlM2IiIHN0cm9rZS13aWR0aD0iNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgICA8L3N2Zz4=",
  "Nacho Plate": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2Q0YTA0YiIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjNmNhMzRiIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZjZkOGE2Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8cGF0aCBkPSJNMTQ4IDEzNGMxMC00NiAxMDMtNTggMTI3IDBaIiBmaWxsPSIjZWZjMzViIi8+PHBhdGggZD0iTTE2MCAxMjhjMTctMjkgODAtMzggMTAyIDBaIiBmaWxsPSIjNWU5YzQ5Ii8+PGNpcmNsZSBjeD0iMTg3IiBjeT0iMTIyIiByPSI4IiBmaWxsPSIjZDk2NzU0Ii8+PGNpcmNsZSBjeD0iMjE0IiBjeT0iMTE4IiByPSI4IiBmaWxsPSIjZDk2NzU0Ii8+PGNpcmNsZSBjeD0iMjM3IiBjeT0iMTIzIiByPSI3IiBmaWxsPSIjZDk2NzU0Ii8+CiAgICA8L3N2Zz4=",
  "Rotisserie Chicken Bowl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzY4YTQ2ZCIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjZDY2MzRmIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZWRmN2Q2Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8cGF0aCBkPSJNMTU1IDEyMmMwLTI0IDI4LTQyIDYwLTQyczYwIDE4IDYwIDQyLTI4IDQyLTYwIDQyLTYwLTE4LTYwLTQyWiIgZmlsbD0iIzc4YWQ2MyIvPjxjaXJjbGUgY3g9IjE5MCIgY3k9IjEyMCIgcj0iMTAiIGZpbGw9IiNlNjcyNTYiLz48Y2lyY2xlIGN4PSIyMTYiIGN5PSIxMzgiIHI9IjkiIGZpbGw9IiNmMGRiN2YiLz48Y2lyY2xlIGN4PSIyMzQiIGN5PSIxMDkiIHI9IjgiIGZpbGw9IiNlNjcyNTYiLz48Y2lyY2xlIGN4PSIxNzUiIGN5PSIxMzkiIHI9IjgiIGZpbGw9IiNmMGRiN2YiLz4KICAgIDwvc3ZnPg==",
  "Peanut Butter Banana Toast": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzY5ODhhMCIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjYzA4YTU2Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZWVmMmY1Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE0IiBjeT0iMTI3IiByeD0iNjQiIHJ5PSIzOCIgZmlsbD0iIzc5OThhZCIvPjxjaXJjbGUgY3g9IjE4OCIgY3k9IjEyMiIgcj0iMTIiIGZpbGw9IiNkMjgxNTkiLz48Y2lyY2xlIGN4PSIyMTYiIGN5PSIxMzUiIHI9IjExIiBmaWxsPSIjZjBkNDdhIi8+PGNpcmNsZSBjeD0iMjQyIiBjeT0iMTE5IiByPSIxMiIgZmlsbD0iIzZmYTU2MSIvPgogICAgPC9zdmc+",
  "Biscuits & Sausage Gravy": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2JkODA3MCIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjZGNiNDhjIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZjNlMmQxIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE0IiBjeT0iMTI3IiByeD0iNjIiIHJ5PSIzOCIgZmlsbD0iI2M0ODY3NiIvPjxlbGxpcHNlIGN4PSIyMTAiIGN5PSIxMjYiIHJ4PSI0MCIgcnk9IjIyIiBmaWxsPSIjZGVhYjlhIi8+PGNpcmNsZSBjeD0iMjM1IiBjeT0iMTE0IiByPSI3IiBmaWxsPSIjZjJkYmI5Ii8+CiAgICA8L3N2Zz4=",
  "Hash Brown Breakfast Skillet": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2YxYmU2MiIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjY2U2ZDNjIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZmZmMGQyIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjEwIiBjeT0iMTMyIiByeD0iNjYiIHJ5PSIzOCIgZmlsbD0iI2Y0Yzg2ZiIvPjxjaXJjbGUgY3g9IjE5MCIgY3k9IjEyNyIgcj0iMTgiIGZpbGw9IiNmZmY3ZGIiLz48Y2lyY2xlIGN4PSIyMjIiIGN5PSIxMjkiIHI9IjE3IiBmaWxsPSIjZmZmN2RiIi8+PGNpcmNsZSBjeD0iMTkwIiBjeT0iMTI3IiByPSI4IiBmaWxsPSIjZjdiZjNkIi8+PGNpcmNsZSBjeD0iMjIyIiBjeT0iMTI5IiByPSI4IiBmaWxsPSIjZjdiZjNkIi8+CiAgICA8L3N2Zz4=",
  "Apple Cinnamon Pancakes": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2YxYmU2MiIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjY2U2ZDNjIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZmZmMGQyIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjEwIiBjeT0iMTMyIiByeD0iNjYiIHJ5PSIzOCIgZmlsbD0iI2Y0Yzg2ZiIvPjxjaXJjbGUgY3g9IjE5MCIgY3k9IjEyNyIgcj0iMTgiIGZpbGw9IiNmZmY3ZGIiLz48Y2lyY2xlIGN4PSIyMjIiIGN5PSIxMjkiIHI9IjE3IiBmaWxsPSIjZmZmN2RiIi8+PGNpcmNsZSBjeD0iMTkwIiBjeT0iMTI3IiByPSI4IiBmaWxsPSIjZjdiZjNkIi8+PGNpcmNsZSBjeD0iMjIyIiBjeT0iMTI5IiByPSI4IiBmaWxsPSIjZjdiZjNkIi8+CiAgICA8L3N2Zz4=",
  "Ham & Cheese Egg Muffins": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2JkODA3MCIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjZGNiNDhjIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZjNlMmQxIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE0IiBjeT0iMTI3IiByeD0iNjIiIHJ5PSIzOCIgZmlsbD0iI2M0ODY3NiIvPjxlbGxpcHNlIGN4PSIyMTAiIGN5PSIxMjYiIHJ4PSI0MCIgcnk9IjIyIiBmaWxsPSIjZGVhYjlhIi8+PGNpcmNsZSBjeD0iMjM1IiBjeT0iMTE0IiByPSI3IiBmaWxsPSIjZjJkYmI5Ii8+CiAgICA8L3N2Zz4=",
  "Cinnamon Roll French Toast Bake": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2YxYmU2MiIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjY2U2ZDNjIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZmZmMGQyIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjEwIiBjeT0iMTMyIiByeD0iNjYiIHJ5PSIzOCIgZmlsbD0iI2Y0Yzg2ZiIvPjxjaXJjbGUgY3g9IjE5MCIgY3k9IjEyNyIgcj0iMTgiIGZpbGw9IiNmZmY3ZGIiLz48Y2lyY2xlIGN4PSIyMjIiIGN5PSIxMjkiIHI9IjE3IiBmaWxsPSIjZmZmN2RiIi8+PGNpcmNsZSBjeD0iMTkwIiBjeT0iMTI3IiByPSI4IiBmaWxsPSIjZjdiZjNkIi8+PGNpcmNsZSBjeD0iMjIyIiBjeT0iMTI5IiByPSI4IiBmaWxsPSIjZjdiZjNkIi8+CiAgICA8L3N2Zz4=",
  "Buffalo Chicken Wrap": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2MzOGQ0ZCIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjOGE0YjMxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZjJlMGI1Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjEyIiBjeT0iMTI2IiByeD0iNjQiIHJ5PSIzOCIgZmlsbD0iI2Q4YjE2NiIvPjxlbGxpcHNlIGN4PSIxOTQiIGN5PSIxMjQiIHJ4PSIyMiIgcnk9IjE1IiBmaWxsPSIjYjk3MjQzIi8+PGVsbGlwc2UgY3g9IjIyOCIgY3k9IjEyOCIgcng9IjIyIiByeT0iMTUiIGZpbGw9IiNiOTcyNDMiLz48Y2lyY2xlIGN4PSIyNDciIGN5PSIxMTYiIHI9IjkiIGZpbGw9IiM1ZmEwNTAiLz4KICAgIDwvc3ZnPg==",
  "Italian Sub Sandwich": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2QwOGEzOSIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjNmY0MTJiIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZjdkZmE3Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8cmVjdCB4PSIxNTIiIHk9IjEwNiIgd2lkdGg9IjExOCIgaGVpZ2h0PSIyNCIgcng9IjEyIiBmaWxsPSIjNmMzZjI4Ii8+PHJlY3QgeD0iMTQ2IiB5PSI5NSIgd2lkdGg9IjEzMCIgaGVpZ2h0PSIxOCIgcng9IjkiIGZpbGw9IiM3NGE2NGQiLz48cmVjdCB4PSIxNDgiIHk9Ijg0IiB3aWR0aD0iMTI2IiBoZWlnaHQ9IjE4IiByeD0iOSIgZmlsbD0iI2NjN2YzYyIvPjxwYXRoIGQ9Ik0xNDUgODNjOC0yNCAxMTQtMjQgMTMyIDBaIiBmaWxsPSIjZTBiODZmIi8+CiAgICA8L3N2Zz4=",
  "Broccoli Cheddar Soup": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2Q5OGM1MyIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjNmUzYTJhIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZjJkNWE2Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8cGF0aCBkPSJNMTYwIDExMGgxMTBjMCAzNi0xOCA2MC01NSA2MHMtNTUtMjQtNTUtNjBaIiBmaWxsPSIjZDY4MDQ5Ii8+PHBhdGggZD0iTTE1NCAxMDloMTIyIiBzdHJva2U9IiNmN2U3YzUiIHN0cm9rZS13aWR0aD0iOSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGNpcmNsZSBjeD0iMTg4IiBjeT0iMTI4IiByPSI2IiBmaWxsPSIjZjBkNThiIi8+PGNpcmNsZSBjeD0iMjE1IiBjeT0iMTM4IiByPSI3IiBmaWxsPSIjZjBkNThiIi8+PGNpcmNsZSBjeD0iMjM3IiBjeT0iMTI2IiByPSI2IiBmaWxsPSIjZjBkNThiIi8+CiAgICA8L3N2Zz4=",
  "Chicken Noodle Soup": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2Q3YjQ2MCIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjYWY1NTMxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZjRlNmJkIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8cGF0aCBkPSJNMTU1IDEyMmMwLTIyIDI4LTM2IDYwLTM2czYwIDE0IDYwIDM2LTI4IDM2LTYwIDM2LTYwLTE0LTYwLTM2WiIgZmlsbD0iI2YwY2Y3NCIvPjxwYXRoIGQ9Ik0xNjUgMTIwYzE4LTE4IDc3LTE4IDk3IDBNMTcwIDEzM2MxOC0xOCA2Ny0xOCA4NyAwIiBzdHJva2U9IiNjODdlM2IiIHN0cm9rZS13aWR0aD0iNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgICA8L3N2Zz4=",
  "Philly Cheesesteak Sliders": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzdiM2YzOSIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjZDlhZDY4Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZWRlMWNhIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE0IiBjeT0iMTI3IiByeD0iNjQiIHJ5PSIzOCIgZmlsbD0iIzc3NDEzYSIvPjxlbGxpcHNlIGN4PSIyMTAiIGN5PSIxMjciIHJ4PSI0MiIgcnk9IjIyIiBmaWxsPSIjOTQ1MTQ4Ii8+PHBhdGggZD0iTTE4MyAxMjdjMTIgMTAgNDUgMTAgNTctMSIgc3Ryb2tlPSIjY2Y5ZTcyIiBzdHJva2Utd2lkdGg9IjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogICAgPC9zdmc+",
  "Baked Ham & Cheese Pinwheels": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2JkODA3MCIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjZGNiNDhjIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZjNlMmQxIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE0IiBjeT0iMTI3IiByeD0iNjIiIHJ5PSIzOCIgZmlsbD0iI2M0ODY3NiIvPjxlbGxpcHNlIGN4PSIyMTAiIGN5PSIxMjYiIHJ4PSI0MCIgcnk9IjIyIiBmaWxsPSIjZGVhYjlhIi8+PGNpcmNsZSBjeD0iMjM1IiBjeT0iMTE0IiByPSI3IiBmaWxsPSIjZjJkYmI5Ii8+CiAgICA8L3N2Zz4=",
  "Pot Roast with Vegetables": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzdiM2YzOSIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjZDlhZDY4Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZWRlMWNhIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE0IiBjeT0iMTI3IiByeD0iNjQiIHJ5PSIzOCIgZmlsbD0iIzc3NDEzYSIvPjxlbGxpcHNlIGN4PSIyMTAiIGN5PSIxMjciIHJ4PSI0MiIgcnk9IjIyIiBmaWxsPSIjOTQ1MTQ4Ii8+PHBhdGggZD0iTTE4MyAxMjdjMTIgMTAgNDUgMTAgNTctMSIgc3Ryb2tlPSIjY2Y5ZTcyIiBzdHJva2Utd2lkdGg9IjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogICAgPC9zdmc+",
  "Chicken Pot Pie": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2MzOGQ0ZCIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjOGE0YjMxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZjJlMGI1Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjEyIiBjeT0iMTI2IiByeD0iNjQiIHJ5PSIzOCIgZmlsbD0iI2Q4YjE2NiIvPjxlbGxpcHNlIGN4PSIxOTQiIGN5PSIxMjQiIHJ4PSIyMiIgcnk9IjE1IiBmaWxsPSIjYjk3MjQzIi8+PGVsbGlwc2UgY3g9IjIyOCIgY3k9IjEyOCIgcng9IjIyIiByeT0iMTUiIGZpbGw9IiNiOTcyNDMiLz48Y2lyY2xlIGN4PSIyNDciIGN5PSIxMTYiIHI9IjkiIGZpbGw9IiM1ZmEwNTAiLz4KICAgIDwvc3ZnPg==",
  "Stuffed Bell Peppers": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzY5ODhhMCIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjYzA4YTU2Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZWVmMmY1Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE0IiBjeT0iMTI3IiByeD0iNjQiIHJ5PSIzOCIgZmlsbD0iIzc5OThhZCIvPjxjaXJjbGUgY3g9IjE4OCIgY3k9IjEyMiIgcj0iMTIiIGZpbGw9IiNkMjgxNTkiLz48Y2lyY2xlIGN4PSIyMTYiIGN5PSIxMzUiIHI9IjExIiBmaWxsPSIjZjBkNDdhIi8+PGNpcmNsZSBjeD0iMjQyIiBjeT0iMTE5IiByPSIxMiIgZmlsbD0iIzZmYTU2MSIvPgogICAgPC9zdmc+",
  "Honey Garlic Chicken": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2MzOGQ0ZCIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjOGE0YjMxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZjJlMGI1Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjEyIiBjeT0iMTI2IiByeD0iNjQiIHJ5PSIzOCIgZmlsbD0iI2Q4YjE2NiIvPjxlbGxpcHNlIGN4PSIxOTQiIGN5PSIxMjQiIHJ4PSIyMiIgcnk9IjE1IiBmaWxsPSIjYjk3MjQzIi8+PGVsbGlwc2UgY3g9IjIyOCIgY3k9IjEyOCIgcng9IjIyIiByeT0iMTUiIGZpbGw9IiNiOTcyNDMiLz48Y2lyY2xlIGN4PSIyNDciIGN5PSIxMTYiIHI9IjkiIGZpbGw9IiM1ZmEwNTAiLz4KICAgIDwvc3ZnPg==",
  "Creamy Tuscan Chicken": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2MzOGQ0ZCIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjOGE0YjMxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZjJlMGI1Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjEyIiBjeT0iMTI2IiByeD0iNjQiIHJ5PSIzOCIgZmlsbD0iI2Q4YjE2NiIvPjxlbGxpcHNlIGN4PSIxOTQiIGN5PSIxMjQiIHJ4PSIyMiIgcnk9IjE1IiBmaWxsPSIjYjk3MjQzIi8+PGVsbGlwc2UgY3g9IjIyOCIgY3k9IjEyOCIgcng9IjIyIiByeT0iMTUiIGZpbGw9IiNiOTcyNDMiLz48Y2lyY2xlIGN4PSIyNDciIGN5PSIxMTYiIHI9IjkiIGZpbGw9IiM1ZmEwNTAiLz4KICAgIDwvc3ZnPg==",
  "Chicken Enchiladas": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2Q0YTA0YiIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjNmNhMzRiIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZjZkOGE2Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8cGF0aCBkPSJNMTQ4IDEzNGMxMC00NiAxMDMtNTggMTI3IDBaIiBmaWxsPSIjZWZjMzViIi8+PHBhdGggZD0iTTE2MCAxMjhjMTctMjkgODAtMzggMTAyIDBaIiBmaWxsPSIjNWU5YzQ5Ii8+PGNpcmNsZSBjeD0iMTg3IiBjeT0iMTIyIiByPSI4IiBmaWxsPSIjZDk2NzU0Ii8+PGNpcmNsZSBjeD0iMjE0IiBjeT0iMTE4IiByPSI4IiBmaWxsPSIjZDk2NzU0Ii8+PGNpcmNsZSBjeD0iMjM3IiBjeT0iMTIzIiByPSI3IiBmaWxsPSIjZDk2NzU0Ii8+CiAgICA8L3N2Zz4=",
  "Beef Stroganoff": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzdiM2YzOSIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjZDlhZDY4Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZWRlMWNhIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE0IiBjeT0iMTI3IiByeD0iNjQiIHJ5PSIzOCIgZmlsbD0iIzc3NDEzYSIvPjxlbGxpcHNlIGN4PSIyMTAiIGN5PSIxMjciIHJ4PSI0MiIgcnk9IjIyIiBmaWxsPSIjOTQ1MTQ4Ii8+PHBhdGggZD0iTTE4MyAxMjdjMTIgMTAgNDUgMTAgNTctMSIgc3Ryb2tlPSIjY2Y5ZTcyIiBzdHJva2Utd2lkdGg9IjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogICAgPC9zdmc+",
  "Lasagna": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2Q3YjQ2MCIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjYWY1NTMxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZjRlNmJkIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8cGF0aCBkPSJNMTU1IDEyMmMwLTIyIDI4LTM2IDYwLTM2czYwIDE0IDYwIDM2LTI4IDM2LTYwIDM2LTYwLTE0LTYwLTM2WiIgZmlsbD0iI2YwY2Y3NCIvPjxwYXRoIGQ9Ik0xNjUgMTIwYzE4LTE4IDc3LTE4IDk3IDBNMTcwIDEzM2MxOC0xOCA2Ny0xOCA4NyAwIiBzdHJva2U9IiNjODdlM2IiIHN0cm9rZS13aWR0aD0iNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgICA8L3N2Zz4=",
  "Shrimp Scampi": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzZmYTZjOCIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjZGQ4NzY4Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZTNmMmZiIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjEzIiBjeT0iMTI2IiByeD0iNTUiIHJ5PSIzNCIgZmlsbD0iIzc4YjVkOSIvPjxwYXRoIGQ9Ik0xNjAgMTI2YzEyLTIyIDQwLTM0IDY4LTM0IDE5IDAgMzUgNyA0NiAxOS0xMCAxOC0zNSA0MS03NCA0MS0xOSAwLTM4LTgtNTItMjZaIiBmaWxsPSIjZTI4YjZlIi8+PGNpcmNsZSBjeD0iMjQxIiBjeT0iMTE1IiByPSI0IiBmaWxsPSIjMWYzMzQ5Ii8+CiAgICA8L3N2Zz4=",
  "Fish Tacos": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2Q0YTA0YiIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjNmNhMzRiIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZjZkOGE2Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8cGF0aCBkPSJNMTQ4IDEzNGMxMC00NiAxMDMtNTggMTI3IDBaIiBmaWxsPSIjZWZjMzViIi8+PHBhdGggZD0iTTE2MCAxMjhjMTctMjkgODAtMzggMTAyIDBaIiBmaWxsPSIjNWU5YzQ5Ii8+PGNpcmNsZSBjeD0iMTg3IiBjeT0iMTIyIiByPSI4IiBmaWxsPSIjZDk2NzU0Ii8+PGNpcmNsZSBjeD0iMjE0IiBjeT0iMTE4IiByPSI4IiBmaWxsPSIjZDk2NzU0Ii8+PGNpcmNsZSBjeD0iMjM3IiBjeT0iMTIzIiByPSI3IiBmaWxsPSIjZDk2NzU0Ii8+CiAgICA8L3N2Zz4=",
  "Teriyaki Chicken Bowls": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzY4YTQ2ZCIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjZDY2MzRmIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZWRmN2Q2Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8cGF0aCBkPSJNMTU1IDEyMmMwLTI0IDI4LTQyIDYwLTQyczYwIDE4IDYwIDQyLTI4IDQyLTYwIDQyLTYwLTE4LTYwLTQyWiIgZmlsbD0iIzc4YWQ2MyIvPjxjaXJjbGUgY3g9IjE5MCIgY3k9IjEyMCIgcj0iMTAiIGZpbGw9IiNlNjcyNTYiLz48Y2lyY2xlIGN4PSIyMTYiIGN5PSIxMzgiIHI9IjkiIGZpbGw9IiNmMGRiN2YiLz48Y2lyY2xlIGN4PSIyMzQiIGN5PSIxMDkiIHI9IjgiIGZpbGw9IiNlNjcyNTYiLz48Y2lyY2xlIGN4PSIxNzUiIGN5PSIxMzkiIHI9IjgiIGZpbGw9IiNmMGRiN2YiLz4KICAgIDwvc3ZnPg==",
  "Pork Chops with Apples": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2JkODA3MCIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjZGNiNDhjIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZjNlMmQxIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE0IiBjeT0iMTI3IiByeD0iNjIiIHJ5PSIzOCIgZmlsbD0iI2M0ODY3NiIvPjxlbGxpcHNlIGN4PSIyMTAiIGN5PSIxMjYiIHJ4PSI0MCIgcnk9IjIyIiBmaWxsPSIjZGVhYjlhIi8+PGNpcmNsZSBjeD0iMjM1IiBjeT0iMTE0IiByPSI3IiBmaWxsPSIjZjJkYmI5Ii8+CiAgICA8L3N2Zz4=",
  "Baked Ziti": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2Q3YjQ2MCIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjYWY1NTMxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZjRlNmJkIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8cGF0aCBkPSJNMTU1IDEyMmMwLTIyIDI4LTM2IDYwLTM2czYwIDE0IDYwIDM2LTI4IDM2LTYwIDM2LTYwLTE0LTYwLTM2WiIgZmlsbD0iI2YwY2Y3NCIvPjxwYXRoIGQ9Ik0xNjUgMTIwYzE4LTE4IDc3LTE4IDk3IDBNMTcwIDEzM2MxOC0xOCA2Ny0xOCA4NyAwIiBzdHJva2U9IiNjODdlM2IiIHN0cm9rZS13aWR0aD0iNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgICA8L3N2Zz4=",
  "Cajun Sausage Pasta": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2Q3YjQ2MCIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjYWY1NTMxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZjRlNmJkIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8cGF0aCBkPSJNMTU1IDEyMmMwLTIyIDI4LTM2IDYwLTM2czYwIDE0IDYwIDM2LTI4IDM2LTYwIDM2LTYwLTE0LTYwLTM2WiIgZmlsbD0iI2YwY2Y3NCIvPjxwYXRoIGQ9Ik0xNjUgMTIwYzE4LTE4IDc3LTE4IDk3IDBNMTcwIDEzM2MxOC0xOCA2Ny0xOCA4NyAwIiBzdHJva2U9IiNjODdlM2IiIHN0cm9rZS13aWR0aD0iNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgICA8L3N2Zz4=",
  "Chicken Broccoli Casserole": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2MzOGQ0ZCIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjOGE0YjMxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZjJlMGI1Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjEyIiBjeT0iMTI2IiByeD0iNjQiIHJ5PSIzOCIgZmlsbD0iI2Q4YjE2NiIvPjxlbGxpcHNlIGN4PSIxOTQiIGN5PSIxMjQiIHJ4PSIyMiIgcnk9IjE1IiBmaWxsPSIjYjk3MjQzIi8+PGVsbGlwc2UgY3g9IjIyOCIgY3k9IjEyOCIgcng9IjIyIiByeT0iMTUiIGZpbGw9IiNiOTcyNDMiLz48Y2lyY2xlIGN4PSIyNDciIGN5PSIxMTYiIHI9IjkiIGZpbGw9IiM1ZmEwNTAiLz4KICAgIDwvc3ZnPg==",
  "Pulled Pork Sandwiches": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2QwOGEzOSIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjNmY0MTJiIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZjdkZmE3Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8cmVjdCB4PSIxNTIiIHk9IjEwNiIgd2lkdGg9IjExOCIgaGVpZ2h0PSIyNCIgcng9IjEyIiBmaWxsPSIjNmMzZjI4Ii8+PHJlY3QgeD0iMTQ2IiB5PSI5NSIgd2lkdGg9IjEzMCIgaGVpZ2h0PSIxOCIgcng9IjkiIGZpbGw9IiM3NGE2NGQiLz48cmVjdCB4PSIxNDgiIHk9Ijg0IiB3aWR0aD0iMTI2IiBoZWlnaHQ9IjE4IiByeD0iOSIgZmlsbD0iI2NjN2YzYyIvPjxwYXRoIGQ9Ik0xNDUgODNjOC0yNCAxMTQtMjQgMTMyIDBaIiBmaWxsPSIjZTBiODZmIi8+CiAgICA8L3N2Zz4=",
  "Chicken & Dumplings": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2MzOGQ0ZCIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjOGE0YjMxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZjJlMGI1Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjEyIiBjeT0iMTI2IiByeD0iNjQiIHJ5PSIzOCIgZmlsbD0iI2Q4YjE2NiIvPjxlbGxpcHNlIGN4PSIxOTQiIGN5PSIxMjQiIHJ4PSIyMiIgcnk9IjE1IiBmaWxsPSIjYjk3MjQzIi8+PGVsbGlwc2UgY3g9IjIyOCIgY3k9IjEyOCIgcng9IjIyIiByeT0iMTUiIGZpbGw9IiNiOTcyNDMiLz48Y2lyY2xlIGN4PSIyNDciIGN5PSIxMTYiIHI9IjkiIGZpbGw9IiM1ZmEwNTAiLz4KICAgIDwvc3ZnPg==",
  "Shepherd\u2019s Pie": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzY5ODhhMCIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjYzA4YTU2Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZWVmMmY1Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE0IiBjeT0iMTI3IiByeD0iNjQiIHJ5PSIzOCIgZmlsbD0iIzc5OThhZCIvPjxjaXJjbGUgY3g9IjE4OCIgY3k9IjEyMiIgcj0iMTIiIGZpbGw9IiNkMjgxNTkiLz48Y2lyY2xlIGN4PSIyMTYiIGN5PSIxMzUiIHI9IjExIiBmaWxsPSIjZjBkNDdhIi8+PGNpcmNsZSBjeD0iMjQyIiBjeT0iMTE5IiByPSIxMiIgZmlsbD0iIzZmYTU2MSIvPgogICAgPC9zdmc+",
  "Lemon Herb Chicken & Potatoes": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2MzOGQ0ZCIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjOGE0YjMxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZjJlMGI1Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjEyIiBjeT0iMTI2IiByeD0iNjQiIHJ5PSIzOCIgZmlsbD0iI2Q4YjE2NiIvPjxlbGxpcHNlIGN4PSIxOTQiIGN5PSIxMjQiIHJ4PSIyMiIgcnk9IjE1IiBmaWxsPSIjYjk3MjQzIi8+PGVsbGlwc2UgY3g9IjIyOCIgY3k9IjEyOCIgcng9IjIyIiByeT0iMTUiIGZpbGw9IiNiOTcyNDMiLz48Y2lyY2xlIGN4PSIyNDciIGN5PSIxMTYiIHI9IjkiIGZpbGw9IiM1ZmEwNTAiLz4KICAgIDwvc3ZnPg==",
  "English Muffin Pizzas": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2RhOGQ1OCIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjOWMzZDM1Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZjRkMmFiIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8cGF0aCBkPSJNMTU5IDkyIDI3NyAxMTcgMTg5IDE2N1oiIGZpbGw9IiNlMGIzNmUiLz48cGF0aCBkPSJNMTYwIDkyYzE4IDQgMTAzIDIwIDExNyAyNSIgc3Ryb2tlPSIjYzU3YTQzIiBzdHJva2Utd2lkdGg9IjEyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48Y2lyY2xlIGN4PSIyMDkiIGN5PSIxMTgiIHI9IjciIGZpbGw9IiNiNjQyMzkiLz48Y2lyY2xlIGN4PSIyMjgiIGN5PSIxMjciIHI9IjciIGZpbGw9IiNiNjQyMzkiLz48Y2lyY2xlIGN4PSIyMDQiIGN5PSIxNDEiIHI9IjciIGZpbGw9IiNiNjQyMzkiLz4KICAgIDwvc3ZnPg==",
  "Chicken Caesar Pita": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2MzOGQ0ZCIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjOGE0YjMxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZjJlMGI1Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjEyIiBjeT0iMTI2IiByeD0iNjQiIHJ5PSIzOCIgZmlsbD0iI2Q4YjE2NiIvPjxlbGxpcHNlIGN4PSIxOTQiIGN5PSIxMjQiIHJ4PSIyMiIgcnk9IjE1IiBmaWxsPSIjYjk3MjQzIi8+PGVsbGlwc2UgY3g9IjIyOCIgY3k9IjEyOCIgcng9IjIyIiByeT0iMTUiIGZpbGw9IiNiOTcyNDMiLz48Y2lyY2xlIGN4PSIyNDciIGN5PSIxMTYiIHI9IjkiIGZpbGw9IiM1ZmEwNTAiLz4KICAgIDwvc3ZnPg==",
  "Microwave Nacho Bowl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2Q0YTA0YiIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjNmNhMzRiIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZjZkOGE2Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8cGF0aCBkPSJNMTQ4IDEzNGMxMC00NiAxMDMtNTggMTI3IDBaIiBmaWxsPSIjZWZjMzViIi8+PHBhdGggZD0iTTE2MCAxMjhjMTctMjkgODAtMzggMTAyIDBaIiBmaWxsPSIjNWU5YzQ5Ii8+PGNpcmNsZSBjeD0iMTg3IiBjeT0iMTIyIiByPSI4IiBmaWxsPSIjZDk2NzU0Ii8+PGNpcmNsZSBjeD0iMjE0IiBjeT0iMTE4IiByPSI4IiBmaWxsPSIjZDk2NzU0Ii8+PGNpcmNsZSBjeD0iMjM3IiBjeT0iMTIzIiByPSI3IiBmaWxsPSIjZDk2NzU0Ii8+CiAgICA8L3N2Zz4=",
  "Ramen Egg Bowl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2Q3YjQ2MCIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjYWY1NTMxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZjRlNmJkIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8cGF0aCBkPSJNMTU1IDEyMmMwLTIyIDI4LTM2IDYwLTM2czYwIDE0IDYwIDM2LTI4IDM2LTYwIDM2LTYwLTE0LTYwLTM2WiIgZmlsbD0iI2YwY2Y3NCIvPjxwYXRoIGQ9Ik0xNjUgMTIwYzE4LTE4IDc3LTE4IDk3IDBNMTcwIDEzM2MxOC0xOCA2Ny0xOCA4NyAwIiBzdHJva2U9IiNjODdlM2IiIHN0cm9rZS13aWR0aD0iNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgICA8L3N2Zz4=",
  "Turkey Ranch Roll-Ups": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzY5ODhhMCIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjYzA4YTU2Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZWVmMmY1Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE0IiBjeT0iMTI3IiByeD0iNjQiIHJ5PSIzOCIgZmlsbD0iIzc5OThhZCIvPjxjaXJjbGUgY3g9IjE4OCIgY3k9IjEyMiIgcj0iMTIiIGZpbGw9IiNkMjgxNTkiLz48Y2lyY2xlIGN4PSIyMTYiIGN5PSIxMzUiIHI9IjExIiBmaWxsPSIjZjBkNDdhIi8+PGNpcmNsZSBjeD0iMjQyIiBjeT0iMTE5IiByPSIxMiIgZmlsbD0iIzZmYTU2MSIvPgogICAgPC9zdmc+",
  "Garlic Parmesan Chicken Bites": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2MzOGQ0ZCIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjOGE0YjMxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZjJlMGI1Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjEyIiBjeT0iMTI2IiByeD0iNjQiIHJ5PSIzOCIgZmlsbD0iI2Q4YjE2NiIvPjxlbGxpcHNlIGN4PSIxOTQiIGN5PSIxMjQiIHJ4PSIyMiIgcnk9IjE1IiBmaWxsPSIjYjk3MjQzIi8+PGVsbGlwc2UgY3g9IjIyOCIgY3k9IjEyOCIgcng9IjIyIiByeT0iMTUiIGZpbGw9IiNiOTcyNDMiLz48Y2lyY2xlIGN4PSIyNDciIGN5PSIxMTYiIHI9IjkiIGZpbGw9IiM1ZmEwNTAiLz4KICAgIDwvc3ZnPg==",
  "Cheesy Taco Rice Bowl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2Q0YTA0YiIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjNmNhMzRiIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZjZkOGE2Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8cGF0aCBkPSJNMTQ4IDEzNGMxMC00NiAxMDMtNTggMTI3IDBaIiBmaWxsPSIjZWZjMzViIi8+PHBhdGggZD0iTTE2MCAxMjhjMTctMjkgODAtMzggMTAyIDBaIiBmaWxsPSIjNWU5YzQ5Ii8+PGNpcmNsZSBjeD0iMTg3IiBjeT0iMTIyIiByPSI4IiBmaWxsPSIjZDk2NzU0Ii8+PGNpcmNsZSBjeD0iMjE0IiBjeT0iMTE4IiByPSI4IiBmaWxsPSIjZDk2NzU0Ii8+PGNpcmNsZSBjeD0iMjM3IiBjeT0iMTIzIiByPSI3IiBmaWxsPSIjZDk2NzU0Ii8+CiAgICA8L3N2Zz4=",
  "Tomato Mozzarella Toast": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzAgMjcwIj4KICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzY5ODhhMCIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjYzA4YTU2Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZWVmMmY1Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PjwvZGVmcz4KICAgIDxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2JnKSIvPgogICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI0OCIgcj0iMTAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4xNCkiLz4KICAgIDxjaXJjbGUgY3g9IjM2MiIgY3k9IjIxNiIgcj0iMTEwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LC4wOSkiLz4KICAgIDxlbGxpcHNlIGN4PSIyMTUiIGN5PSIxMzgiIHJ4PSIxMDgiIHJ5PSI3MiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwuODQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE1IiBjeT0iMTM4IiByeD0iOTYiIHJ5PSI2MiIgZmlsbD0icmdiYSgyNDgsMjQ3LDI0NCwuOTIpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjE0IiBjeT0iMTI3IiByeD0iNjQiIHJ5PSIzOCIgZmlsbD0iIzc5OThhZCIvPjxjaXJjbGUgY3g9IjE4OCIgY3k9IjEyMiIgcj0iMTIiIGZpbGw9IiNkMjgxNTkiLz48Y2lyY2xlIGN4PSIyMTYiIGN5PSIxMzUiIHI9IjExIiBmaWxsPSIjZjBkNDdhIi8+PGNpcmNsZSBjeD0iMjQyIiBjeT0iMTE5IiByPSIxMiIgZmlsbD0iIzZmYTU2MSIvPgogICAgPC9zdmc+"
};

