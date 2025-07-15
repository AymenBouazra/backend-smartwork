const User = require('../models/user');

User.countDocuments().then(async (usersCount) => {
    if (usersCount === 0) {
        const usersToInsert = [
            {
                firstname: 'Sarra',
                lastname: 'Ziadi',
                email: 'sarraziadi@gmail.com',
                password: '$2a$10$MDIRedaQqMwEzx78OdnOR.8ve5/W42.qDXm/GgQYkTsYfeioKmBkG',
                role: 'Employee',
                profile: 'Normal',
                preferences: {
                    workLocation: 'on-site',
                    defaultDays: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi']
                }
            }
        ]
        await User.create(usersToInsert);
    }
});

console.log(`=> All collections has been seeded successfully!`);