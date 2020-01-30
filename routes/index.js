
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render("index", {
    "projects": [
    { "name": "Waiting in Line",
    "image": "lorempixel.people.1.jpeg",
    "id": "project1"
    },
    { "name": "Needfinding",
    "image": "lorempixel.city.1.jpeg",
    "id": "project2"
  },
  { "name": "Prototyping",
    "image": "lorempixel.abstract.1.jpeg",
    "id": "project2"
  },
  { "name": "Heuristic Evaluation",
    "image": "lorempixel.city.2.jpeg",
    "id": "project2"
  },
  { "name": "Visualization",
    "image": "lorempixel.people.2.jpeg",
    "id": "project2"
  },
  { "name": "Social Design",
    "image": "lorempixel.abstract.8.jpeg",
    "id": "project2"
  },
  { "name": "Gestural Interaction",
    "image": "lorempixel.technics.2.jpeg",
    "id": "project2"
  },
  { "name": "Design Tools",
    "image": "lorempixel.technics.1.jpeg",
    "id": "project2"
  },
    ]
  });
};