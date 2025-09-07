// Enhanced Professional Creative Dashboard Application - Fixed Version
class CreativeDashboard {
    constructor() {
        this.currentTab = 'home';
        this.currentEditingItem = null;
        this.autoSaveTimer = null;
        this.scriptAutoSaveTimer = null;
        this.timeUpdateTimer = null;
        
        // Initialize with provided data
        this.data = this.getInitialData();
        
        console.log('CreativeDashboard constructor called');
        this.init();
    }
    
    init() {
        console.log('Initializing enhanced dashboard...');
        this.loadData();
        this.setupEventListeners();
        this.loadUserInterface();
        this.startTimeUpdates();
        console.log('Enhanced dashboard initialization complete');
    }
    
    // ==================== INITIAL DATA ====================
    
    getInitialData() {
        return {
            "home_tab": {
                "weather": {
                    "temperature": 27,
                    "condition": "Partly Cloudy",
                    "humidity": 70,
                    "wind_speed": 15,
                    "forecast": [
                        {"day": "Today", "high": 29, "low": 22, "condition": "Partly Cloudy"},
                        {"day": "Tomorrow", "high": 28, "low": 21, "condition": "Light Rain"},
                        {"day": "Day 3", "high": 26, "low": 20, "condition": "Cloudy"},
                        {"day": "Day 4", "high": 30, "low": 23, "condition": "Sunny"}
                    ]
                },
                "air_quality": {
                    "aqi": 58,
                    "status": "Moderate",
                    "pm25": 14,
                    "pm10": 40,
                    "advice": "Air quality is acceptable for most people."
                },
                "tasks": [
                    {
                        "id": 1,
                        "title": "Write opening scene for Digital Nomad script",
                        "category": "Creative",
                        "priority": "High",
                        "due": "Today",
                        "completed": false,
                        "created": "2025-09-07",
                        "notes": "Focus on establishing the tech work environment"
                    },
                    {
                        "id": 2,
                        "title": "Schedule health checkup",
                        "category": "Health",
                        "priority": "Medium",
                        "due": "This week",
                        "completed": false,
                        "created": "2025-09-06",
                        "notes": ""
                    },
                    {
                        "id": 3,
                        "title": "Research film equipment for short film",
                        "category": "Creative",
                        "priority": "High",
                        "due": "Tomorrow",
                        "completed": false,
                        "created": "2025-09-05",
                        "notes": "Check camera rental options in Bangalore"
                    }
                ],
                "quick_notes": [
                    {
                        "id": 1,
                        "content": "Story idea: AI that helps people find their purpose",
                        "timestamp": "2 hours ago",
                        "created": "2025-09-07T02:00:00",
                        "category": "story_idea"
                    },
                    {
                        "id": 2,
                        "content": "Character: Tech support worker who discovers company secrets",
                        "timestamp": "1 day ago",
                        "created": "2025-09-06T10:30:00",
                        "category": "character"
                    }
                ],
                "finance": {
                    "monthly_budget": 50000,
                    "spent_this_month": 32500,
                    "savings_goal": 10000,
                    "emergency_fund_target": 150000,
                    "current_savings": 45000,
                    "categories": [
                        {
                            "id": 1,
                            "name": "Food & Dining",
                            "budget": 8000,
                            "spent": 6200,
                            "transactions": [
                                {"date": "2025-09-06", "amount": 450, "description": "Dinner at restaurant"},
                                {"date": "2025-09-05", "amount": 280, "description": "Grocery shopping"},
                                {"date": "2025-09-04", "amount": 320, "description": "Lunch delivery"}
                            ]
                        },
                        {
                            "id": 2,
                            "name": "Transportation",
                            "budget": 5000,
                            "spent": 4100,
                            "transactions": [
                                {"date": "2025-09-06", "amount": 1200, "description": "Uber rides"},
                                {"date": "2025-09-03", "amount": 800, "description": "Bus pass renewal"}
                            ]
                        },
                        {
                            "id": 3,
                            "name": "Entertainment",
                            "budget": 3000,
                            "spent": 2800,
                            "transactions": [
                                {"date": "2025-09-05", "amount": 600, "description": "Movie tickets"},
                                {"date": "2025-09-01", "amount": 1200, "description": "Netflix, Spotify subscriptions"}
                            ]
                        },
                        {
                            "id": 4,
                            "name": "Health",
                            "budget": 2000,
                            "spent": 1200,
                            "transactions": [
                                {"date": "2025-09-04", "amount": 800, "description": "Gym membership"},
                                {"date": "2025-09-02", "amount": 400, "description": "Supplements"}
                            ]
                        },
                        {
                            "id": 5,
                            "name": "Creative Equipment",
                            "budget": 8000,
                            "spent": 3500,
                            "transactions": [
                                {"date": "2025-09-03", "amount": 2500, "description": "Camera lens"},
                                {"date": "2025-09-01", "amount": 1000, "description": "Writing software subscription"}
                            ]
                        },
                        {
                            "id": 6,
                            "name": "Utilities",
                            "budget": 3000,
                            "spent": 2900,
                            "transactions": [
                                {"date": "2025-09-01", "amount": 1500, "description": "Internet bill"},
                                {"date": "2025-09-01", "amount": 1400, "description": "Electricity bill"}
                            ]
                        }
                    ]
                },
                "health": {
                    "daily_steps": 7500,
                    "daily_goal": 10000,
                    "water_intake": 6,
                    "water_goal": 8,
                    "sleep_hours": 6.5,
                    "recommended_sleep": 8,
                    "weight": 70,
                    "weight_goal": 68,
                    "weekly_stats": [
                        {"day": "Mon", "steps": 8200, "water": 7, "sleep": 7.5},
                        {"day": "Tue", "steps": 7800, "water": 6, "sleep": 6.0},
                        {"day": "Wed", "steps": 9100, "water": 8, "sleep": 7.0},
                        {"day": "Thu", "steps": 6900, "water": 5, "sleep": 6.5},
                        {"day": "Fri", "steps": 7500, "water": 6, "sleep": 6.5},
                        {"day": "Sat", "steps": 8800, "water": 7, "sleep": 8.0},
                        {"day": "Sun", "steps": 7200, "water": 6, "sleep": 6.0}
                    ],
                    "health_goals": [
                        {"id": 1, "goal": "Reach 10,000 steps daily", "target_date": "2025-10-01", "progress": 75},
                        {"id": 2, "goal": "Drink 8 glasses of water daily", "target_date": "2025-09-15", "progress": 75},
                        {"id": 3, "goal": "Get 8 hours of sleep", "target_date": "2025-09-30", "progress": 60}
                    ]
                }
            },
            "creative_tab": {
                "story_ideas": [
                    {
                        "id": 1,
                        "title": "The Digital Nomad's Dilemma",
                        "genre": "Drama/Thriller",
                        "logline": "A tech professional discovers their remote work is being used to manipulate global markets",
                        "status": "Concept",
                        "created": "2025-09-01",
                        "notes": "Explore themes of modern work culture and ethical responsibility",
                        "connected_script_id": 1,
                        "connected_characters": [1],
                        "connected_locations": [1],
                        "tags": ["tech", "thriller", "ethics", "modern"]
                    },
                    {
                        "id": 2,
                        "title": "Bangalore Traffic Symphony",
                        "genre": "Comedy/Musical",
                        "logline": "A frustrated commuter imagines the city's traffic as an elaborate musical performance",
                        "status": "Treatment",
                        "created": "2025-08-28",
                        "notes": "Could be a short film with musical elements showcasing Bangalore's unique character",
                        "connected_script_id": 2,
                        "connected_characters": [2],
                        "connected_locations": [2],
                        "tags": ["comedy", "musical", "bangalore", "short_film"]
                    },
                    {
                        "id": 3,
                        "title": "The Last Film Projector",
                        "genre": "Drama/Historical",
                        "logline": "An aging projectionist fights to save the last single-screen cinema in his neighborhood",
                        "status": "Outline",
                        "created": "2025-08-25",
                        "notes": "Based on real cinema closures in Indian cities. Need to interview actual projectionists.",
                        "connected_script_id": null,
                        "connected_characters": [3],
                        "connected_locations": [3],
                        "tags": ["drama", "historical", "cinema", "nostalgia"]
                    }
                ],
                "scripts": [
                    {
                        "id": 1,
                        "title": "The Digital Nomad's Dilemma - Draft 1",
                        "story_id": 1,
                        "type": "Feature Screenplay",
                        "pages": 0,
                        "target_pages": 110,
                        "status": "Planning",
                        "last_modified": "2025-09-07T04:00:00",
                        "word_count": 0,
                        "scenes": 0,
                        "content": "",
                        "outline": "ACT I: Introduction to protagonist's daily routine\nACT II: Discovery of the conspiracy\nACT III: Confrontation and resolution",
                        "notes": "Focus on authentic tech work experience"
                    },
                    {
                        "id": 2,
                        "title": "Bangalore Traffic Symphony - Short",
                        "story_id": 2,
                        "type": "Short Film Script",
                        "pages": 8,
                        "target_pages": 10,
                        "status": "First Draft",
                        "last_modified": "2025-09-05T18:30:00",
                        "word_count": 1200,
                        "scenes": 12,
                        "content": "FADE IN:\n\nEXT. BANGALORE STREET - MORNING\n\nRush hour traffic. Horns honking in rhythm...",
                        "outline": "Musical journey through Bangalore's traffic patterns",
                        "notes": "Need to incorporate actual Bangalore landmarks"
                    }
                ],
                "characters": [
                    {
                        "id": 1,
                        "name": "Arjun Sharma",
                        "story_ids": [1],
                        "age": 29,
                        "occupation": "Software Developer",
                        "description": "Ambitious tech professional who discovers his code is being misused",
                        "backstory": "From middle-class Bangalore family, worked hard to get into tech",
                        "traits": ["Ethical", "Curious", "Introverted", "Detail-oriented"],
                        "dialogue_style": "Technical but philosophical",
                        "character_arc": "From naive coder to ethical whistleblower",
                        "relationships": [],
                        "notes": "Based on real tech workers I know"
                    },
                    {
                        "id": 2,
                        "name": "Priya Menon",
                        "story_ids": [2],
                        "age": 32,
                        "occupation": "Marketing Manager",
                        "description": "Commuter who sees music in daily chaos",
                        "backstory": "Classical music background, now stuck in corporate life",
                        "traits": ["Creative", "Optimistic", "Musical", "Observant"],
                        "dialogue_style": "Rhythmic, musical undertones",
                        "character_arc": "Rediscovering creativity through daily routine",
                        "relationships": [],
                        "notes": "Represents hope in urban chaos"
                    },
                    {
                        "id": 3,
                        "name": "Ravi Kumar",
                        "story_ids": [3],
                        "age": 65,
                        "occupation": "Cinema Projectionist",
                        "description": "Veteran projectionist with 40 years of experience",
                        "backstory": "Started as teenager, witnessed the golden age of Indian cinema",
                        "traits": ["Passionate", "Traditional", "Stubborn", "Wise"],
                        "dialogue_style": "Nostalgic, storyteller",
                        "character_arc": "Fighting change while accepting progress",
                        "relationships": [],
                        "notes": "Interview needed with actual projectionists"
                    }
                ],
                "locations": [
                    {
                        "id": 1,
                        "name": "Tech Park Office",
                        "story_ids": [1],
                        "type": "Interior",
                        "description": "Modern open-plan office in Electronic City",
                        "availability": "Weekends only",
                        "cost": "₹5,000/day",
                        "notes": "Need permission from management",
                        "atmosphere": "Sterile, fluorescent lighting, glass walls",
                        "practical_considerations": "Power outlets, WiFi, parking",
                        "address": "Electronic City, Bangalore",
                        "contact_info": "facilities@techpark.com"
                    },
                    {
                        "id": 2,
                        "name": "Silk Board Junction",
                        "story_ids": [2],
                        "type": "Exterior",
                        "description": "Notorious traffic junction in Bangalore",
                        "availability": "Public space - always available",
                        "cost": "Free (permit may be needed)",
                        "notes": "Perfect for traffic symphony sequences",
                        "atmosphere": "Chaotic, colorful, energetic",
                        "practical_considerations": "Traffic management, safety, permits",
                        "address": "Silk Board Junction, Bangalore",
                        "contact_info": "BTP traffic police"
                    },
                    {
                        "id": 3,
                        "name": "Rex Cinema Hall",
                        "story_ids": [3],
                        "type": "Interior/Exterior",
                        "description": "Historic single-screen cinema in central Bangalore",
                        "availability": "Flexible",
                        "cost": "₹15,000/day",
                        "notes": "Perfect authentic location, owner is supportive",
                        "atmosphere": "Nostalgic, art deco architecture, vintage equipment",
                        "practical_considerations": "Original projection equipment still functional",
                        "address": "Brigade Road, Bangalore",
                        "contact_info": "owner@rexcinema.in"
                    }
                ],
                "writing_stats": {
                    "daily_goal": 500,
                    "words_today": 320,
                    "words_this_week": 1850,
                    "weekly_goal": 3500,
                    "current_streak": 4,
                    "longest_streak": 12,
                    "total_words": 15600,
                    "projects_active": 2,
                    "scripts_completed": 0,
                    "writing_sessions": [
                        {"date": "2025-09-07", "words": 320, "duration": 45},
                        {"date": "2025-09-06", "words": 450, "duration": 60},
                        {"date": "2025-09-05", "words": 280, "duration": 30},
                        {"date": "2025-09-04", "words": 380, "duration": 50},
                        {"date": "2025-09-03", "words": 420, "duration": 55}
                    ]
                }
            },
            "settings": {
                "theme": "dark",
                "notifications": true,
                "auto_save": true,
                "backup_frequency": "daily",
                "writing_reminders": true,
                "writing_reminder_time": "19:00",
                "default_script_format": "feature",
                "language": "en",
                "currency": "INR",
                "timezone": "Asia/Kolkata",
                "privacy": {
                    "data_sharing": false,
                    "analytics": true,
                    "backup_cloud": false
                }
            }
        };
    }
    
    // ==================== DATA MANAGEMENT ====================
    
    loadData() {
        const savedData = localStorage.getItem('creativeAppData');
        if (savedData) {
            try {
                this.data = JSON.parse(savedData);
            } catch (e) {
                console.error('Error loading data:', e);
                this.data = this.getInitialData();
            }
        } else {
            this.data = this.getInitialData();
            this.saveData();
        }
    }
    
    saveData() {
        try {
            localStorage.setItem('creativeAppData', JSON.stringify(this.data));
            this.showAutoSaveIndicator();
        } catch (e) {
            console.error('Error saving data:', e);
        }
    }
    
    // ==================== TIME UPDATES ====================
    
    startTimeUpdates() {
        this.updateCurrentTime();
        this.timeUpdateTimer = setInterval(() => {
            this.updateCurrentTime();
        }, 60000); // Update every minute
    }
    
    updateCurrentTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: false
        });
        
        const timeElement = document.getElementById('currentTime');
        if (timeElement) {
            timeElement.textContent = timeString;
        }
    }
    
    // ==================== EVENT LISTENERS ====================
    
    setupEventListeners() {
        console.log('Setting up enhanced event listeners...');
        
        // Theme toggle
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.toggleTheme();
            });
        }
        
        // Tab navigation - Fixed event handling
        document.querySelectorAll('.nav-tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const tabName = tab.getAttribute('data-tab');
                if (tabName) {
                    this.switchTab(tabName);
                }
            });
        });
        
        // Setup tab-specific listeners
        this.setupHomeTabListeners();
        this.setupCreativeTabListeners();
        this.setupSettingsListeners();
        this.setupModalListeners();
        this.setupAutoSave();
        
        console.log('Enhanced event listeners setup complete');
    }
    
    setupHomeTabListeners() {
        const addTaskBtn = document.getElementById('addTaskBtn');
        if (addTaskBtn) {
            addTaskBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.openTaskModal();
            });
        }
        
        const addNoteBtn = document.getElementById('addNoteBtn');
        if (addNoteBtn) {
            addNoteBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.openNoteModal();
            });
        }
        
        const addExpenseBtn = document.getElementById('addExpenseBtn');
        if (addExpenseBtn) {
            addExpenseBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.openExpenseModal();
            });
        }
        
        const updateHealthBtn = document.getElementById('updateHealthBtn');
        if (updateHealthBtn) {
            updateHealthBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.openHealthModal();
            });
        }
        
        const manageFinanceBtn = document.getElementById('manageFinanceBtn');
        if (manageFinanceBtn) {
            manageFinanceBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.openFinanceModal();
            });
        }
        
        const healthStatsBtn = document.getElementById('healthStatsBtn');
        if (healthStatsBtn) {
            healthStatsBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.openHealthStatsModal();
            });
        }
    }
    
    setupCreativeTabListeners() {
        const addStoryBtn = document.getElementById('addStoryBtn');
        if (addStoryBtn) {
            addStoryBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.openStoryModal();
            });
        }
        
        const addScriptBtn = document.getElementById('addScriptBtn');
        if (addScriptBtn) {
            addScriptBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.openScriptModal();
            });
        }
        
        const addCharacterBtn = document.getElementById('addCharacterBtn');
        if (addCharacterBtn) {
            addCharacterBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.openCharacterModal();
            });
        }
        
        const addLocationBtn = document.getElementById('addLocationBtn');
        if (addLocationBtn) {
            addLocationBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.openLocationModal();
            });
        }
    }
    
    setupSettingsListeners() {
        const themeSelect = document.getElementById('themeSelect');
        if (themeSelect) {
            themeSelect.addEventListener('change', (e) => {
                this.changeTheme(e.target.value);
            });
        }
        
        const writingGoal = document.getElementById('writingGoal');
        if (writingGoal) {
            writingGoal.addEventListener('change', (e) => {
                this.data.creative_tab.writing_stats.daily_goal = parseInt(e.target.value);
                this.saveData();
            });
        }
        
        const writingReminders = document.getElementById('writingReminders');
        if (writingReminders) {
            writingReminders.addEventListener('change', (e) => {
                this.data.settings.writing_reminders = e.target.checked;
                this.saveData();
            });
        }
        
        const reminderTime = document.getElementById('reminderTime');
        if (reminderTime) {
            reminderTime.addEventListener('change', (e) => {
                this.data.settings.writing_reminder_time = e.target.value;
                this.saveData();
            });
        }
        
        const exportDataBtn = document.getElementById('exportDataBtn');
        if (exportDataBtn) {
            exportDataBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.exportData();
            });
        }
        
        const importDataBtn = document.getElementById('importDataBtn');
        if (importDataBtn) {
            importDataBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                document.getElementById('importFile').click();
            });
        }
        
        const importFile = document.getElementById('importFile');
        if (importFile) {
            importFile.addEventListener('change', (e) => {
                this.importData(e.target.files[0]);
            });
        }
        
        const clearDataBtn = document.getElementById('clearDataBtn');
        if (clearDataBtn) {
            clearDataBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                if (confirm('Are you sure you want to clear all data? This cannot be undone.')) {
                    this.clearAllData();
                }
            });
        }
    }
    
    setupModalListeners() {
        // Close modals when clicking overlay or close button
        document.querySelectorAll('.modal').forEach(modal => {
            const overlay = modal.querySelector('.modal-overlay');
            const closeBtn = modal.querySelector('.modal-close');
            
            if (overlay) {
                overlay.addEventListener('click', () => this.closeModal(modal.id));
            }
            if (closeBtn) {
                closeBtn.addEventListener('click', () => this.closeModal(modal.id));
            }
        });
        
        // Task modal
        const taskForm = document.getElementById('taskForm');
        if (taskForm) {
            taskForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.saveTask();
            });
        }
        
        const cancelTask = document.getElementById('cancelTask');
        if (cancelTask) {
            cancelTask.addEventListener('click', () => this.closeModal('taskModal'));
        }
        
        // Note modal
        const noteForm = document.getElementById('noteForm');
        if (noteForm) {
            noteForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.saveNote();
            });
        }
        
        const cancelNote = document.getElementById('cancelNote');
        if (cancelNote) {
            cancelNote.addEventListener('click', () => this.closeModal('noteModal'));
        }
        
        // Story modal
        const storyForm = document.getElementById('storyForm');
        if (storyForm) {
            storyForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.saveStory();
            });
        }
        
        const cancelStory = document.getElementById('cancelStory');
        if (cancelStory) {
            cancelStory.addEventListener('click', () => this.closeModal('storyModal'));
        }
        
        // Character modal
        const characterForm = document.getElementById('characterForm');
        if (characterForm) {
            characterForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.saveCharacter();
            });
        }
        
        const cancelCharacter = document.getElementById('cancelCharacter');
        if (cancelCharacter) {
            cancelCharacter.addEventListener('click', () => this.closeModal('characterModal'));
        }
        
        // Location modal
        const locationForm = document.getElementById('locationForm');
        if (locationForm) {
            locationForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.saveLocation();
            });
        }
        
        const cancelLocation = document.getElementById('cancelLocation');
        if (cancelLocation) {
            cancelLocation.addEventListener('click', () => this.closeModal('locationModal'));
        }
        
        // Script modal
        const saveScript = document.getElementById('saveScript');
        if (saveScript) {
            saveScript.addEventListener('click', () => this.saveScript());
        }
        
        const closeScript = document.getElementById('closeScript');
        if (closeScript) {
            closeScript.addEventListener('click', () => this.closeModal('scriptModal'));
        }
        
        // Script toolbar
        const boldBtn = document.getElementById('boldBtn');
        if (boldBtn) {
            boldBtn.addEventListener('click', () => this.formatScript('bold'));
        }
        
        const italicBtn = document.getElementById('italicBtn');
        if (italicBtn) {
            italicBtn.addEventListener('click', () => this.formatScript('italic'));
        }
        
        const headerBtn = document.getElementById('headerBtn');
        if (headerBtn) {
            headerBtn.addEventListener('click', () => this.formatScript('header'));
        }
        
        // Script editor content changes
        const scriptEditor = document.getElementById('scriptEditor');
        if (scriptEditor) {
            scriptEditor.addEventListener('input', () => this.updateWordCount());
        }
        
        // Finance modal
        const closeFinance = document.getElementById('closeFinance');
        if (closeFinance) {
            closeFinance.addEventListener('click', () => this.closeModal('financeModal'));
        }
        
        // Finance tabs
        document.querySelectorAll('.finance-tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                const tabName = tab.getAttribute('data-tab');
                if (tabName) {
                    this.switchFinanceTab(tabName);
                }
            });
        });
        
        const addTransactionBtn = document.getElementById('addTransactionBtn');
        if (addTransactionBtn) {
            addTransactionBtn.addEventListener('click', () => this.openExpenseModal());
        }
        
        // Health modal
        const healthForm = document.getElementById('healthForm');
        if (healthForm) {
            healthForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.saveHealth();
            });
        }
        
        const cancelHealth = document.getElementById('cancelHealth');
        if (cancelHealth) {
            cancelHealth.addEventListener('click', () => this.closeModal('healthModal'));
        }
        
        // Expense modal
        const expenseForm = document.getElementById('expenseForm');
        if (expenseForm) {
            expenseForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.saveExpense();
            });
        }
        
        const cancelExpense = document.getElementById('cancelExpense');
        if (cancelExpense) {
            cancelExpense.addEventListener('click', () => this.closeModal('expenseModal'));
        }
    }
    
    setupAutoSave() {
        // Auto-save every 30 seconds
        this.autoSaveTimer = setInterval(() => {
            this.saveData();
        }, 30000);
        
        // Save on page unload
        window.addEventListener('beforeunload', () => {
            this.saveData();
        });
    }
    
    // ==================== UI MANAGEMENT ====================
    
    loadUserInterface() {
        console.log('Loading enhanced UI');
        
        // Load theme
        this.applyTheme(this.data.settings.theme);
        const themeSelect = document.getElementById('themeSelect');
        if (themeSelect) {
            themeSelect.value = this.data.settings.theme;
        }
        
        // Update theme toggle text
        this.updateThemeToggleText();
        
        // Load tab content
        this.loadHomeTab();
        this.loadCreativeTab();
        this.loadSettings();
    }
    
    switchTab(tabName) {
        console.log('Switching to tab:', tabName);
        
        // Update tab buttons
        document.querySelectorAll('.nav-tab').forEach(tab => {
            tab.classList.remove('active');
        });
        const activeTab = document.querySelector(`[data-tab="${tabName}"]`);
        if (activeTab) {
            activeTab.classList.add('active');
        }
        
        // Update tab content
        document.querySelectorAll('.tab-pane').forEach(pane => {
            pane.classList.remove('active');
        });
        const activePane = document.getElementById(`${tabName}Tab`);
        if (activePane) {
            activePane.classList.add('active');
        }
        
        this.currentTab = tabName;
        
        // Load tab-specific content
        if (tabName === 'home') {
            this.loadHomeTab();
        } else if (tabName === 'creative') {
            this.loadCreativeTab();
        } else if (tabName === 'settings') {
            this.loadSettings();
        }
    }
    
    toggleTheme() {
        const currentTheme = this.data.settings.theme;
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        this.changeTheme(newTheme);
    }
    
    updateThemeToggleText() {
        const themeToggleText = document.getElementById('themeToggleText');
        if (themeToggleText) {
            themeToggleText.textContent = this.data.settings.theme === 'dark' ? 'Light Mode' : 'Dark Mode';
        }
    }
    
    // ==================== HOME TAB ====================
    
    loadHomeTab() {
        console.log('Loading enhanced home tab');
        this.renderTasks();
        this.renderNotes();
        this.renderFinanceOverview();
        this.renderHealthOverview();
    }
    
    renderTasks() {
        const tasksList = document.getElementById('tasksList');
        
        if (!tasksList) return;
        
        if (this.data.home_tab.tasks.length === 0) {
            tasksList.innerHTML = `
                <div style="text-align: center; padding: 40px; color: var(--color-text-secondary);">
                    <div style="font-size: 48px; margin-bottom: 16px;">📝</div>
                    <p style="font-size: 18px; margin-bottom: 8px;">No tasks yet</p>
                    <p style="font-size: 14px;">Add your first task to get started!</p>
                </div>
            `;
            return;
        }
        
        tasksList.innerHTML = this.data.home_tab.tasks.map(task => `
            <div class="task-item ${task.completed ? 'completed' : ''}">
                <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''} 
                       data-task-id="${task.id}">
                <div class="task-content">
                    <div class="task-title">${this.escapeHtml(task.title)}</div>
                    <div class="task-meta">
                        <span style="background: var(--color-bg-${this.getCategoryColor(task.category)}); padding: 2px 8px; border-radius: 12px; font-size: 11px;">${task.category}</span>
                        <span style="color: ${this.getPriorityColor(task.priority)}">${task.priority}</span>
                        <span>${task.due}</span>
                    </div>
                </div>
                <div class="task-actions">
                    <button class="btn btn--outline btn--sm" data-action="edit-task" data-task-id="${task.id}" title="Edit task">
                        <span class="btn-icon">✏️</span>
                    </button>
                    <button class="btn btn--outline btn--sm" data-action="delete-task" data-task-id="${task.id}" title="Delete task">
                        <span class="btn-icon">🗑️</span>
                    </button>
                </div>
            </div>
        `).join('');
        
        // Add event listeners for task interactions
        tasksList.addEventListener('click', (e) => {
            const target = e.target.closest('[data-action]') || e.target.closest('.task-checkbox');
            
            if (target) {
                e.preventDefault();
                e.stopPropagation();
                
                const taskId = parseInt(target.getAttribute('data-task-id'));
                const action = target.getAttribute('data-action');
                
                if (target.classList.contains('task-checkbox')) {
                    this.toggleTask(taskId);
                } else if (action === 'edit-task') {
                    this.editTask(taskId);
                } else if (action === 'delete-task') {
                    this.deleteTask(taskId);
                }
            }
        });
        
        tasksList.addEventListener('change', (e) => {
            if (e.target.classList.contains('task-checkbox')) {
                const taskId = parseInt(e.target.getAttribute('data-task-id'));
                this.toggleTask(taskId);
            }
        });
    }
    
    renderNotes() {
        const notesList = document.getElementById('notesList');
        
        if (!notesList) return;
        
        if (this.data.home_tab.quick_notes.length === 0) {
            notesList.innerHTML = `
                <div style="text-align: center; padding: 40px; color: var(--color-text-secondary);">
                    <div style="font-size: 48px; margin-bottom: 16px;">💭</div>
                    <p style="font-size: 18px; margin-bottom: 8px;">No notes yet</p>
                    <p style="font-size: 14px;">Capture your first idea!</p>
                </div>
            `;
            return;
        }
        
        notesList.innerHTML = this.data.home_tab.quick_notes.map(note => `
            <div class="note-item">
                <div class="note-content">${this.escapeHtml(note.content)}</div>
                <div class="note-meta">
                    <div style="display: flex; align-items: center; gap: 12px;">
                        <span style="background: var(--color-bg-${this.getCategoryColor(note.category)}); padding: 2px 8px; border-radius: 12px; font-size: 11px;">${this.formatCategoryName(note.category)}</span>
                        <span>${note.timestamp}</span>
                    </div>
                    <div class="note-actions">
                        <button class="btn btn--outline btn--sm" data-action="edit-note" data-note-id="${note.id}" title="Edit note">
                            <span class="btn-icon">✏️</span>
                        </button>
                        <button class="btn btn--outline btn--sm" data-action="delete-note" data-note-id="${note.id}" title="Delete note">
                            <span class="btn-icon">🗑️</span>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
        
        // Add event listeners for note interactions
        notesList.addEventListener('click', (e) => {
            const target = e.target.closest('[data-action]');
            
            if (target) {
                e.preventDefault();
                e.stopPropagation();
                
                const noteId = parseInt(target.getAttribute('data-note-id'));
                const action = target.getAttribute('data-action');
                
                if (action === 'edit-note') {
                    this.editNote(noteId);
                } else if (action === 'delete-note') {
                    this.deleteNote(noteId);
                }
            }
        });
    }
    
    renderFinanceOverview() {
        const finance = this.data.home_tab.finance;
        
        // Calculate totals
        const totalSpent = finance.categories.reduce((sum, cat) => sum + cat.spent, 0);
        const remaining = finance.monthly_budget - totalSpent;
        
        const monthlyBudgetEl = document.getElementById('monthlyBudget');
        const spentThisMonthEl = document.getElementById('spentThisMonth');
        const remainingBudgetEl = document.getElementById('remainingBudget');
        
        if (monthlyBudgetEl) monthlyBudgetEl.textContent = `₹${finance.monthly_budget.toLocaleString()}`;
        if (spentThisMonthEl) spentThisMonthEl.textContent = `₹${totalSpent.toLocaleString()}`;
        if (remainingBudgetEl) remainingBudgetEl.textContent = `₹${remaining.toLocaleString()}`;
        
        // Render savings suggestions
        const suggestions = this.calculateSavingsSuggestions(finance);
        const suggestionsContainer = document.getElementById('savingsSuggestions');
        
        if (suggestionsContainer) {
            if (suggestions.length === 0) {
                suggestionsContainer.innerHTML = `
                    <div style="text-align: center; padding: 20px; color: var(--color-success);">
                        <div style="font-size: 32px; margin-bottom: 8px;">🎉</div>
                        <p>Excellent budget management!</p>
                        <p style="font-size: 14px; color: var(--color-text-secondary);">No immediate savings recommendations.</p>
                    </div>
                `;
            } else {
                suggestionsContainer.innerHTML = suggestions.map(suggestion => `
                    <div class="savings-suggestion">
                        <div class="suggestion-savings">💰 Save ₹${suggestion.potential_savings.toLocaleString()}</div>
                        <div class="suggestion-text">${suggestion.suggestion}</div>
                    </div>
                `).join('');
            }
        }
    }
    
    calculateSavingsSuggestions(finance) {
        const suggestions = [];
        
        finance.categories.forEach(category => {
            if (category.spent > category.budget * 0.8) {
                const potentialSavings = Math.floor(category.spent * 0.15);
                suggestions.push({
                    category: category.name,
                    potential_savings: potentialSavings,
                    suggestion: `Consider reducing ${category.name.toLowerCase()} expenses by 15%`
                });
            }
        });
        
        return suggestions.slice(0, 3);
    }
    
    renderHealthOverview() {
        const health = this.data.home_tab.health;
        
        const dailyStepsEl = document.getElementById('dailySteps');
        const waterIntakeEl = document.getElementById('waterIntake');
        const sleepHoursEl = document.getElementById('sleepHours');
        
        if (dailyStepsEl) dailyStepsEl.textContent = health.daily_steps.toLocaleString();
        if (waterIntakeEl) waterIntakeEl.textContent = health.water_intake;
        if (sleepHoursEl) sleepHoursEl.textContent = health.sleep_hours;
        
        // Update progress bars
        this.updateHealthProgress();
    }
    
    updateHealthProgress() {
        const health = this.data.home_tab.health;
        const progressBars = document.querySelectorAll('.health-metric .progress-bar');
        
        if (progressBars.length >= 3) {
            // Steps progress
            const stepsProgress = (health.daily_steps / health.daily_goal) * 100;
            progressBars[0].style.width = `${Math.min(stepsProgress, 100)}%`;
            
            // Water progress  
            const waterProgress = (health.water_intake / health.water_goal) * 100;
            progressBars[1].style.width = `${Math.min(waterProgress, 100)}%`;
            
            // Sleep progress
            const sleepProgress = (health.sleep_hours / health.recommended_sleep) * 100;
            progressBars[2].style.width = `${Math.min(sleepProgress, 100)}%`;
        }
    }
    
    // ==================== TASK MANAGEMENT ====================
    
    openTaskModal(taskId = null) {
        console.log('Opening enhanced task modal', taskId);
        const modal = document.getElementById('taskModal');
        const title = document.getElementById('taskModalTitle');
        const form = document.getElementById('taskForm');
        
        if (!modal || !title || !form) return;
        
        if (taskId) {
            const task = this.data.home_tab.tasks.find(t => t.id === taskId);
            
            if (task) {
                title.textContent = 'Edit Task';
                document.getElementById('taskTitle').value = task.title;
                document.getElementById('taskCategory').value = task.category;
                document.getElementById('taskPriority').value = task.priority;
                document.getElementById('taskDue').value = task.due;
                document.getElementById('taskNotes').value = task.notes || '';
                
                this.currentEditingItem = { type: 'task', id: taskId };
            }
        } else {
            title.textContent = 'Add Task';
            form.reset();
            this.currentEditingItem = null;
        }
        
        modal.classList.remove('hidden');
    }
    
    saveTask() {
        const taskData = {
            title: document.getElementById('taskTitle').value,
            category: document.getElementById('taskCategory').value,
            priority: document.getElementById('taskPriority').value,
            due: document.getElementById('taskDue').value,
            notes: document.getElementById('taskNotes').value,
            completed: false,
            created: new Date().toISOString().split('T')[0]
        };
        
        if (this.currentEditingItem && this.currentEditingItem.type === 'task') {
            // Edit existing task
            const taskIndex = this.data.home_tab.tasks.findIndex(t => t.id === this.currentEditingItem.id);
            if (taskIndex !== -1) {
                this.data.home_tab.tasks[taskIndex] = { ...this.data.home_tab.tasks[taskIndex], ...taskData };
            }
        } else {
            // Add new task
            taskData.id = this.generateId();
            this.data.home_tab.tasks.push(taskData);
        }
        
        this.saveData();
        this.renderTasks();
        this.closeModal('taskModal');
    }
    
    toggleTask(taskId) {
        const task = this.data.home_tab.tasks.find(t => t.id === taskId);
        if (task) {
            task.completed = !task.completed;
            this.saveData();
            this.renderTasks();
        }
    }
    
    editTask(taskId) {
        this.openTaskModal(taskId);
    }
    
    deleteTask(taskId) {
        if (confirm('Are you sure you want to delete this task?')) {
            this.data.home_tab.tasks = this.data.home_tab.tasks.filter(t => t.id !== taskId);
            this.saveData();
            this.renderTasks();
        }
    }
    
    // ==================== NOTES MANAGEMENT ====================
    
    openNoteModal(noteId = null) {
        const modal = document.getElementById('noteModal');
        const title = document.getElementById('noteModalTitle');
        const form = document.getElementById('noteForm');
        
        if (!modal || !title || !form) return;
        
        if (noteId) {
            const note = this.data.home_tab.quick_notes.find(n => n.id === noteId);
            
            if (note) {
                title.textContent = 'Edit Note';
                document.getElementById('noteContent').value = note.content;
                document.getElementById('noteCategory').value = note.category;
                
                this.currentEditingItem = { type: 'note', id: noteId };
            }
        } else {
            title.textContent = 'Add Note';
            form.reset();
            this.currentEditingItem = null;
        }
        
        modal.classList.remove('hidden');
    }
    
    saveNote() {
        const noteData = {
            content: document.getElementById('noteContent').value,
            category: document.getElementById('noteCategory').value,
            timestamp: this.getRelativeTime(),
            created: new Date().toISOString()
        };
        
        if (this.currentEditingItem && this.currentEditingItem.type === 'note') {
            // Edit existing note
            const noteIndex = this.data.home_tab.quick_notes.findIndex(n => n.id === this.currentEditingItem.id);
            if (noteIndex !== -1) {
                this.data.home_tab.quick_notes[noteIndex] = { ...this.data.home_tab.quick_notes[noteIndex], ...noteData };
            }
        } else {
            // Add new note
            noteData.id = this.generateId();
            this.data.home_tab.quick_notes.push(noteData);
        }
        
        this.saveData();
        this.renderNotes();
        this.closeModal('noteModal');
    }
    
    editNote(noteId) {
        this.openNoteModal(noteId);
    }
    
    deleteNote(noteId) {
        if (confirm('Are you sure you want to delete this note?')) {
            this.data.home_tab.quick_notes = this.data.home_tab.quick_notes.filter(n => n.id !== noteId);
            this.saveData();
            this.renderNotes();
        }
    }
    
    // ==================== HEALTH MANAGEMENT ====================
    
    openHealthModal() {
        const modal = document.getElementById('healthModal');
        if (!modal) return;
        
        const health = this.data.home_tab.health;
        
        document.getElementById('healthSteps').value = health.daily_steps;
        document.getElementById('healthWater').value = health.water_intake;
        document.getElementById('healthSleep').value = health.sleep_hours;
        document.getElementById('healthWeight').value = health.weight;
        
        modal.classList.remove('hidden');
    }
    
    saveHealth() {
        const health = this.data.home_tab.health;
        
        health.daily_steps = parseInt(document.getElementById('healthSteps').value) || 0;
        health.water_intake = parseInt(document.getElementById('healthWater').value) || 0;
        health.sleep_hours = parseFloat(document.getElementById('healthSleep').value) || 0;
        health.weight = parseFloat(document.getElementById('healthWeight').value) || health.weight;
        
        // Update progress on goals
        health.health_goals.forEach(goal => {
            if (goal.goal.includes('steps')) {
                goal.progress = Math.round((health.daily_steps / health.daily_goal) * 100);
            } else if (goal.goal.includes('water')) {
                goal.progress = Math.round((health.water_intake / health.water_goal) * 100);
            } else if (goal.goal.includes('sleep')) {
                goal.progress = Math.round((health.sleep_hours / health.recommended_sleep) * 100);
            }
        });
        
        this.saveData();
        this.renderHealthOverview();
        this.closeModal('healthModal');
    }
    
    openHealthStatsModal() {
        alert('📊 Health Statistics Dashboard\n\nDetailed health analytics and trends coming soon!\n\n• Weekly/Monthly progress charts\n• Goal achievement tracking\n• Health insights and recommendations');
    }
    
    // ==================== EXPENSE MANAGEMENT ====================
    
    openExpenseModal() {
        const modal = document.getElementById('expenseModal');
        if (!modal) return;
        
        // Set today's date as default
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('expenseDate').value = today;
        
        modal.classList.remove('hidden');
    }
    
    saveExpense() {
        const description = document.getElementById('expenseDescription').value;
        const amount = parseFloat(document.getElementById('expenseAmount').value);
        const categoryName = document.getElementById('expenseCategory').value;
        const date = document.getElementById('expenseDate').value;
        
        if (!description || !amount || !categoryName || !date) {
            alert('Please fill in all fields');
            return;
        }
        
        // Find the category and add the transaction
        const category = this.data.home_tab.finance.categories.find(c => c.name === categoryName);
        if (category) {
            const transaction = {
                date: date,
                amount: amount,
                description: description
            };
            
            if (!category.transactions) {
                category.transactions = [];
            }
            
            category.transactions.push(transaction);
            category.spent += amount;
            
            this.saveData();
            this.renderFinanceOverview();
            this.closeModal('expenseModal');
            
            // Clear form
            document.getElementById('expenseForm').reset();
        } else {
            alert('Category not found');
        }
    }
    
    // ==================== CREATIVE TAB ====================
    
    loadCreativeTab() {
        console.log('Loading enhanced creative tab');
        this.renderStories();
        this.renderScripts();
        this.renderCharacters();
        this.renderLocations();
        this.renderWritingStats();
    }
    
    renderStories() {
        const storiesList = document.getElementById('storiesList');
        
        if (!storiesList) return;
        
        if (this.data.creative_tab.story_ideas.length === 0) {
            storiesList.innerHTML = `
                <div style="text-align: center; padding: 60px; color: var(--color-text-secondary);">
                    <div style="font-size: 64px; margin-bottom: 20px;">💡</div>
                    <h3 style="margin: 0 0 12px 0; color: var(--color-text);">No stories yet</h3>
                    <p style="font-size: 16px; margin-bottom: 24px;">Start your creative journey by adding your first story idea!</p>
                    <button class="btn btn--primary" data-action="create-first-story">
                        <span class="btn-icon">✨</span>
                        Create Your First Story
                    </button>
                </div>
            `;
            
            // Add event listener for the create first story button
            storiesList.addEventListener('click', (e) => {
                const target = e.target.closest('[data-action="create-first-story"]');
                if (target) {
                    e.preventDefault();
                    e.stopPropagation();
                    this.openStoryModal();
                }
            });
            
            return;
        }
        
        storiesList.innerHTML = this.data.creative_tab.story_ideas.map(story => `
            <div class="story-card" data-story-id="${story.id}">
                <h4 class="story-title">${this.escapeHtml(story.title)}</h4>
                <div class="story-genre">${this.escapeHtml(story.genre)}</div>
                <div class="story-logline">${this.escapeHtml(story.logline)}</div>
                <div class="story-meta">
                    <span class="story-status ${story.status.toLowerCase()}">${story.status}</span>
                </div>
                <div class="story-actions">
                    <button class="btn btn--primary btn--sm" data-action="write-script" data-story-id="${story.id}" title="Write script">
                        <span class="btn-icon">📝</span>
                        Script
                    </button>
                    <button class="btn btn--secondary btn--sm" data-action="add-character" data-story-id="${story.id}" title="Add character">
                        <span class="btn-icon">🎭</span>
                        Character
                    </button>
                    <button class="btn btn--secondary btn--sm" data-action="add-location" data-story-id="${story.id}" title="Add location">
                        <span class="btn-icon">📍</span>
                        Location
                    </button>
                    <button class="btn btn--outline btn--sm" data-action="edit-story" data-story-id="${story.id}" title="Edit story">
                        <span class="btn-icon">✏️</span>
                    </button>
                    <button class="btn btn--outline btn--sm" data-action="delete-story" data-story-id="${story.id}" title="Delete story">
                        <span class="btn-icon">🗑️</span>
                    </button>
                </div>
            </div>
        `).join('');
        
        // Add event listeners for story interactions
        storiesList.addEventListener('click', (e) => {
            const target = e.target.closest('[data-action]') || e.target.closest('.story-card');
            
            if (target) {
                e.preventDefault();
                e.stopPropagation();
                
                const storyId = parseInt(target.getAttribute('data-story-id'));
                const action = target.getAttribute('data-action');
                
                if (target.classList.contains('story-card') && !action) {
                    this.viewStoryDetails(storyId);
                } else if (action === 'write-script') {
                    this.openScriptForStory(storyId);
                } else if (action === 'add-character') {
                    this.addCharacterToStory(storyId);
                } else if (action === 'add-location') {
                    this.addLocationToStory(storyId);
                } else if (action === 'edit-story') {
                    this.editStory(storyId);
                } else if (action === 'delete-story') {
                    this.deleteStory(storyId);
                }
            }
        });
    }
    
    renderScripts() {
        const scriptsList = document.getElementById('scriptsList');
        
        if (!scriptsList) return;
        
        if (this.data.creative_tab.scripts.length === 0) {
            scriptsList.innerHTML = `
                <div style="text-align: center; padding: 40px; color: var(--color-text-secondary);">
                    <div style="font-size: 48px; margin-bottom: 16px;">📜</div>
                    <p style="font-size: 18px; margin-bottom: 8px;">No scripts yet</p>
                    <p style="font-size: 14px;">Start writing your screenplay!</p>
                </div>
            `;
            return;
        }
        
        scriptsList.innerHTML = this.data.creative_tab.scripts.map(script => {
            const progress = script.target_pages > 0 ? (script.pages / script.target_pages) * 100 : 0;
            
            return `
                <div class="script-item" data-script-id="${script.id}">
                    <div class="script-header">
                        <h4 class="script-title">${this.escapeHtml(script.title)}</h4>
                        <div class="script-stats">
                            <span><strong>${script.pages}</strong>/${script.target_pages} pages</span>
                            <span><strong>${script.word_count.toLocaleString()}</strong> words</span>
                            <span style="background: var(--color-bg-${this.getStatusColor(script.status)}); padding: 2px 8px; border-radius: 12px; font-size: 11px;">${script.status}</span>
                        </div>
                    </div>
                    <div class="script-progress">
                        <div class="script-progress-bar" style="width: ${progress}%"></div>
                    </div>
                    <div style="margin-top: 12px;">
                        <button class="btn btn--outline btn--sm" data-action="delete-script" data-script-id="${script.id}" title="Delete script">
                            <span class="btn-icon">🗑️</span>
                            Delete
                        </button>
                    </div>
                </div>
            `;
        }).join('');
        
        // Add event listeners for script interactions
        scriptsList.addEventListener('click', (e) => {
            const target = e.target.closest('[data-action]') || e.target.closest('.script-item');
            
            if (target) {
                e.preventDefault();
                e.stopPropagation();
                
                const scriptId = parseInt(target.getAttribute('data-script-id'));
                const action = target.getAttribute('data-action');
                
                if (target.classList.contains('script-item') && !action) {
                    this.openScript(scriptId);
                } else if (action === 'delete-script') {
                    this.deleteScript(scriptId);
                }
            }
        });
    }
    
    renderCharacters() {
        const charactersList = document.getElementById('charactersList');
        
        if (!charactersList) return;
        
        if (this.data.creative_tab.characters.length === 0) {
            charactersList.innerHTML = `
                <div style="text-align: center; padding: 40px; color: var(--color-text-secondary);">
                    <div style="font-size: 48px; margin-bottom: 16px;">🎭</div>
                    <p style="font-size: 18px; margin-bottom: 8px;">No characters yet</p>
                    <p style="font-size: 14px;">Create your first character!</p>
                </div>
            `;
            return;
        }
        
        charactersList.innerHTML = this.data.creative_tab.characters.map(character => `
            <div class="character-card" data-character-id="${character.id}">
                <h4 class="character-name">${this.escapeHtml(character.name)}</h4>
                <div class="character-occupation">${character.age} years • ${this.escapeHtml(character.occupation)}</div>
                <div class="character-description">${this.escapeHtml(character.description)}</div>
                <div style="margin-top: 12px; font-size: 12px; color: var(--color-text-secondary);">
                    Stories: ${character.story_ids ? character.story_ids.length : 0}
                </div>
            </div>
        `).join('');
        
        // Add event listeners for character interactions
        charactersList.addEventListener('click', (e) => {
            const target = e.target.closest('.character-card');
            
            if (target) {
                e.preventDefault();
                e.stopPropagation();
                
                const characterId = parseInt(target.getAttribute('data-character-id'));
                this.editCharacter(characterId);
            }
        });
    }
    
    renderLocations() {
        const locationsList = document.getElementById('locationsList');
        
        if (!locationsList) return;
        
        if (this.data.creative_tab.locations.length === 0) {
            locationsList.innerHTML = `
                <div style="text-align: center; padding: 40px; color: var(--color-text-secondary);">
                    <div style="font-size: 48px; margin-bottom: 16px;">📍</div>
                    <p style="font-size: 18px; margin-bottom: 8px;">No locations yet</p>
                    <p style="font-size: 14px;">Add your first filming location!</p>
                </div>
            `;
            return;
        }
        
        locationsList.innerHTML = this.data.creative_tab.locations.map(location => `
            <div class="location-card" data-location-id="${location.id}">
                <h4 class="location-name">${this.escapeHtml(location.name)}</h4>
                <div class="location-type">${location.type}</div>
                <div class="location-description">${this.escapeHtml(location.description)}</div>
                <div style="margin-top: 12px; font-size: 12px; color: var(--color-text-secondary);">
                    ${location.cost} • ${location.availability}
                </div>
            </div>
        `).join('');
        
        // Add event listeners for location interactions
        locationsList.addEventListener('click', (e) => {
            const target = e.target.closest('.location-card');
            
            if (target) {
                e.preventDefault();
                e.stopPropagation();
                
                const locationId = parseInt(target.getAttribute('data-location-id'));
                this.editLocation(locationId);
            }
        });
    }
    
    renderWritingStats() {
        const stats = this.data.creative_tab.writing_stats;
        
        const wordsTodayEl = document.getElementById('wordsToday');
        const currentStreakEl = document.getElementById('currentStreak');
        const totalWordsEl = document.getElementById('totalWords');
        
        if (wordsTodayEl) wordsTodayEl.textContent = stats.words_today.toLocaleString();
        if (currentStreakEl) currentStreakEl.textContent = stats.current_streak;
        if (totalWordsEl) totalWordsEl.textContent = stats.total_words.toLocaleString();
    }
    
    // ==================== STORY MANAGEMENT ====================
    
    openStoryModal(storyId = null) {
        const modal = document.getElementById('storyModal');
        const title = document.getElementById('storyModalTitle');
        const form = document.getElementById('storyForm');
        
        if (!modal || !title || !form) return;
        
        if (storyId) {
            const story = this.data.creative_tab.story_ideas.find(s => s.id === storyId);
            
            if (story) {
                title.textContent = 'Edit Story';
                document.getElementById('storyTitle').value = story.title;
                document.getElementById('storyGenre').value = story.genre;
                document.getElementById('storyLogline').value = story.logline;
                document.getElementById('storyStatus').value = story.status;
                document.getElementById('storyNotes').value = story.notes || '';
                document.getElementById('storyTags').value = story.tags ? story.tags.join(', ') : '';
                
                this.currentEditingItem = { type: 'story', id: storyId };
            }
        } else {
            title.textContent = 'Add Story';
            form.reset();
            this.currentEditingItem = null;
        }
        
        modal.classList.remove('hidden');
    }
    
    saveStory() {
        const tags = document.getElementById('storyTags').value.split(',').map(tag => tag.trim()).filter(tag => tag);
        
        const storyData = {
            title: document.getElementById('storyTitle').value,
            genre: document.getElementById('storyGenre').value,
            logline: document.getElementById('storyLogline').value,
            status: document.getElementById('storyStatus').value,
            notes: document.getElementById('storyNotes').value,
            tags: tags,
            created: new Date().toISOString(),
            connected_script_id: null,
            connected_characters: [],
            connected_locations: []
        };
        
        if (this.currentEditingItem && this.currentEditingItem.type === 'story') {
            // Edit existing story
            const storyIndex = this.data.creative_tab.story_ideas.findIndex(s => s.id === this.currentEditingItem.id);
            if (storyIndex !== -1) {
                this.data.creative_tab.story_ideas[storyIndex] = { ...this.data.creative_tab.story_ideas[storyIndex], ...storyData };
            }
        } else {
            // Add new story
            storyData.id = this.generateId();
            this.data.creative_tab.story_ideas.push(storyData);
        }
        
        this.saveData();
        this.renderStories();
        this.closeModal('storyModal');
    }
    
    editStory(storyId) {
        this.openStoryModal(storyId);
    }
    
    deleteStory(storyId) {
        if (confirm('Are you sure you want to delete this story? This will also delete connected scripts, characters, and locations.')) {
            this.data.creative_tab.story_ideas = this.data.creative_tab.story_ideas.filter(s => s.id !== storyId);
            // Also remove connected items
            this.data.creative_tab.scripts = this.data.creative_tab.scripts.filter(s => s.story_id !== storyId);
            this.data.creative_tab.characters = this.data.creative_tab.characters.filter(c => !c.story_ids || !c.story_ids.includes(storyId));
            this.data.creative_tab.locations = this.data.creative_tab.locations.filter(l => !l.story_ids || !l.story_ids.includes(storyId));
            
            this.saveData();
            this.loadCreativeTab();
        }
    }
    
    openScriptForStory(storyId) {
        const story = this.data.creative_tab.story_ideas.find(s => s.id === storyId);
        
        if (!story) return;
        
        if (story.connected_script_id) {
            this.openScript(story.connected_script_id);
        } else {
            // Create new script for this story
            const scriptData = {
                id: this.generateId(),
                title: `${story.title} - Script`,
                story_id: storyId,
                type: 'Feature Screenplay',
                pages: 0,
                target_pages: 110,
                status: 'Planning',
                last_modified: new Date().toISOString(),
                word_count: 0,
                scenes: 0,
                content: '',
                outline: '',
                notes: ''
            };
            
            this.data.creative_tab.scripts.push(scriptData);
            story.connected_script_id = scriptData.id;
            
            this.saveData();
            this.renderScripts();
            this.openScript(scriptData.id);
        }
    }
    
    viewStoryDetails(storyId) {
        this.editStory(storyId);
    }
    
    // ==================== SCRIPT EDITOR ====================
    
    openScriptModal(scriptId = null) {
        const modal = document.getElementById('scriptModal');
        const title = document.getElementById('scriptModalTitle');
        
        if (!modal || !title) return;
        
        if (scriptId) {
            const script = this.data.creative_tab.scripts.find(s => s.id === scriptId);
            
            if (script) {
                title.textContent = script.title;
                const scriptEditor = document.getElementById('scriptEditor');
                const scriptOutline = document.getElementById('scriptOutline');
                const scriptNotes = document.getElementById('scriptNotes');
                
                if (scriptEditor) scriptEditor.innerHTML = script.content || '';
                if (scriptOutline) scriptOutline.value = script.outline || '';
                if (scriptNotes) scriptNotes.value = script.notes || '';
                
                this.currentEditingItem = { type: 'script', id: scriptId };
            }
        } else {
            title.textContent = 'New Script';
            const scriptEditor = document.getElementById('scriptEditor');
            const scriptOutline = document.getElementById('scriptOutline');
            const scriptNotes = document.getElementById('scriptNotes');
            
            if (scriptEditor) scriptEditor.innerHTML = '';
            if (scriptOutline) scriptOutline.value = '';
            if (scriptNotes) scriptNotes.value = '';
            
            // Create new script
            const scriptData = {
                id: this.generateId(),
                title: 'Untitled Script',
                story_id: null,
                type: 'Feature Screenplay',
                pages: 0,
                target_pages: 110,
                status: 'Planning',
                last_modified: new Date().toISOString(),
                word_count: 0,
                scenes: 0,
                content: '',
                outline: '',
                notes: ''
            };
            
            this.data.creative_tab.scripts.push(scriptData);
            this.currentEditingItem = { type: 'script', id: scriptData.id };
            this.saveData();
        }
        
        modal.classList.remove('hidden');
        this.updateWordCount();
        this.setupScriptAutoSave();
    }
    
    openScript(scriptId) {
        this.openScriptModal(scriptId);
    }
    
    setupScriptAutoSave() {
        if (this.scriptAutoSaveTimer) {
            clearInterval(this.scriptAutoSaveTimer);
        }
        
        this.scriptAutoSaveTimer = setInterval(() => {
            if (this.currentEditingItem && this.currentEditingItem.type === 'script') {
                this.autoSaveScript();
            }
        }, 5000);
    }
    
    autoSaveScript() {
        if (!this.currentEditingItem || this.currentEditingItem.type !== 'script') return;
        
        const script = this.data.creative_tab.scripts.find(s => s.id === this.currentEditingItem.id);
        
        if (script) {
            const scriptEditor = document.getElementById('scriptEditor');
            const scriptOutline = document.getElementById('scriptOutline');
            const scriptNotes = document.getElementById('scriptNotes');
            
            if (scriptEditor) script.content = scriptEditor.innerHTML;
            if (scriptOutline) script.outline = scriptOutline.value;
            if (scriptNotes) script.notes = scriptNotes.value;
            
            script.last_modified = new Date().toISOString();
            script.word_count = this.countWords(script.content);
            
            this.saveData();
            this.showAutoSaveIndicator();
        }
    }
    
    saveScript() {
        this.autoSaveScript();
        this.renderScripts();
        this.closeModal('scriptModal');
    }
    
    formatScript(command) {
        const editor = document.getElementById('scriptEditor');
        if (!editor) return;
        
        editor.focus();
        
        switch (command) {
            case 'bold':
                document.execCommand('bold');
                break;
            case 'italic':
                document.execCommand('italic');
                break;
            case 'header':
                const selection = window.getSelection();
                if (selection.toString()) {
                    document.execCommand('formatBlock', false, 'h3');
                }
                break;
        }
        
        this.updateWordCount();
    }
    
    updateWordCount() {
        const scriptEditor = document.getElementById('scriptEditor');
        const wordCountEl = document.getElementById('wordCount');
        
        if (!scriptEditor || !wordCountEl) return;
        
        const content = scriptEditor.textContent || '';
        const wordCount = this.countWords(content);
        wordCountEl.textContent = wordCount.toLocaleString();
    }
    
    countWords(text) {
        return text.trim() ? text.trim().split(/\s+/).length : 0;
    }
    
    deleteScript(scriptId) {
        if (confirm('Are you sure you want to delete this script?')) {
            this.data.creative_tab.scripts = this.data.creative_tab.scripts.filter(s => s.id !== scriptId);
            
            // Remove connection from story if exists
            this.data.creative_tab.story_ideas.forEach(story => {
                if (story.connected_script_id === scriptId) {
                    story.connected_script_id = null;
                }
            });
            
            this.saveData();
            this.renderScripts();
        }
    }
    
    // ==================== CHARACTER MANAGEMENT ====================
    
    openCharacterModal(characterId = null, storyId = null) {
        const modal = document.getElementById('characterModal');
        const title = document.getElementById('characterModalTitle');
        const form = document.getElementById('characterForm');
        
        if (!modal || !title || !form) return;
        
        // Populate story options
        const storiesSelect = document.getElementById('characterStories');
        if (storiesSelect) {
            storiesSelect.innerHTML = this.data.creative_tab.story_ideas.map(story => 
                `<option value="${story.id}">${this.escapeHtml(story.title)}</option>`
            ).join('');
        }
        
        if (characterId) {
            const character = this.data.creative_tab.characters.find(c => c.id === characterId);
            
            if (character) {
                title.textContent = 'Edit Character';
                document.getElementById('characterName').value = character.name;
                document.getElementById('characterAge').value = character.age;
                document.getElementById('characterOccupation').value = character.occupation;
                document.getElementById('characterDescription').value = character.description;
                document.getElementById('characterBackstory').value = character.backstory;
                document.getElementById('characterTraits').value = character.traits ? character.traits.join(', ') : '';
                document.getElementById('characterDialogue').value = character.dialogue_style;
                document.getElementById('characterArc').value = character.character_arc;
                document.getElementById('characterNotes').value = character.notes || '';
                
                // Select connected stories
                if (storiesSelect) {
                    Array.from(storiesSelect.options).forEach(option => {
                        option.selected = character.story_ids && character.story_ids.includes(parseInt(option.value));
                    });
                }
                
                this.currentEditingItem = { type: 'character', id: characterId };
            }
        } else {
            title.textContent = 'Add Character';
            form.reset();
            
            // Pre-select story if provided
            if (storyId && storiesSelect) {
                Array.from(storiesSelect.options).forEach(option => {
                    option.selected = parseInt(option.value) === storyId;
                });
            }
            
            this.currentEditingItem = null;
        }
        
        modal.classList.remove('hidden');
    }
    
    saveCharacter() {
        const storiesSelect = document.getElementById('characterStories');
        const selectedStories = storiesSelect ? Array.from(storiesSelect.selectedOptions).map(option => parseInt(option.value)) : [];
        const traits = document.getElementById('characterTraits').value.split(',').map(trait => trait.trim()).filter(trait => trait);
        
        const characterData = {
            name: document.getElementById('characterName').value,
            age: parseInt(document.getElementById('characterAge').value) || 0,
            occupation: document.getElementById('characterOccupation').value,
            description: document.getElementById('characterDescription').value,
            backstory: document.getElementById('characterBackstory').value,
            traits: traits,
            dialogue_style: document.getElementById('characterDialogue').value,
            character_arc: document.getElementById('characterArc').value,
            story_ids: selectedStories,
            notes: document.getElementById('characterNotes').value,
            relationships: []
        };
        
        if (this.currentEditingItem && this.currentEditingItem.type === 'character') {
            // Edit existing character
            const characterIndex = this.data.creative_tab.characters.findIndex(c => c.id === this.currentEditingItem.id);
            if (characterIndex !== -1) {
                this.data.creative_tab.characters[characterIndex] = { ...this.data.creative_tab.characters[characterIndex], ...characterData };
            }
        } else {
            // Add new character
            characterData.id = this.generateId();
            this.data.creative_tab.characters.push(characterData);
        }
        
        this.saveData();
        this.renderCharacters();
        this.closeModal('characterModal');
    }
    
    editCharacter(characterId) {
        this.openCharacterModal(characterId);
    }
    
    addCharacterToStory(storyId) {
        this.openCharacterModal(null, storyId);
    }
    
    // ==================== LOCATION MANAGEMENT ====================
    
    openLocationModal(locationId = null, storyId = null) {
        const modal = document.getElementById('locationModal');
        const title = document.getElementById('locationModalTitle');
        const form = document.getElementById('locationForm');
        
        if (!modal || !title || !form) return;
        
        // Populate story options
        const storiesSelect = document.getElementById('locationStories');
        if (storiesSelect) {
            storiesSelect.innerHTML = this.data.creative_tab.story_ideas.map(story => 
                `<option value="${story.id}">${this.escapeHtml(story.title)}</option>`
            ).join('');
        }
        
        if (locationId) {
            const location = this.data.creative_tab.locations.find(l => l.id === locationId);
            
            if (location) {
                title.textContent = 'Edit Location';
                document.getElementById('locationName').value = location.name;
                document.getElementById('locationType').value = location.type;
                document.getElementById('locationDescription').value = location.description;
                document.getElementById('locationAtmosphere').value = location.atmosphere || '';
                document.getElementById('locationAddress').value = location.address || '';
                document.getElementById('locationAvailability').value = location.availability || '';
                document.getElementById('locationCost').value = location.cost || '';
                document.getElementById('locationContact').value = location.contact_info || '';
                document.getElementById('locationPractical').value = location.practical_considerations || '';
                document.getElementById('locationNotes').value = location.notes || '';
                
                // Select connected stories
                if (storiesSelect) {
                    Array.from(storiesSelect.options).forEach(option => {
                        option.selected = location.story_ids && location.story_ids.includes(parseInt(option.value));
                    });
                }
                
                this.currentEditingItem = { type: 'location', id: locationId };
            }
        } else {
            title.textContent = 'Add Location';
            form.reset();
            
            // Pre-select story if provided
            if (storyId && storiesSelect) {
                Array.from(storiesSelect.options).forEach(option => {
                    option.selected = parseInt(option.value) === storyId;
                });
            }
            
            this.currentEditingItem = null;
        }
        
        modal.classList.remove('hidden');
    }
    
    saveLocation() {
        const storiesSelect = document.getElementById('locationStories');
        const selectedStories = storiesSelect ? Array.from(storiesSelect.selectedOptions).map(option => parseInt(option.value)) : [];
        
        const locationData = {
            name: document.getElementById('locationName').value,
            type: document.getElementById('locationType').value,
            description: document.getElementById('locationDescription').value,
            atmosphere: document.getElementById('locationAtmosphere').value,
            address: document.getElementById('locationAddress').value,
            availability: document.getElementById('locationAvailability').value,
            cost: document.getElementById('locationCost').value,
            contact_info: document.getElementById('locationContact').value,
            practical_considerations: document.getElementById('locationPractical').value,
            story_ids: selectedStories,
            notes: document.getElementById('locationNotes').value
        };
        
        if (this.currentEditingItem && this.currentEditingItem.type === 'location') {
            // Edit existing location
            const locationIndex = this.data.creative_tab.locations.findIndex(l => l.id === this.currentEditingItem.id);
            if (locationIndex !== -1) {
                this.data.creative_tab.locations[locationIndex] = { ...this.data.creative_tab.locations[locationIndex], ...locationData };
            }
        } else {
            // Add new location
            locationData.id = this.generateId();
            this.data.creative_tab.locations.push(locationData);
        }
        
        this.saveData();
        this.renderLocations();
        this.closeModal('locationModal');
    }
    
    editLocation(locationId) {
        this.openLocationModal(locationId);
    }
    
    addLocationToStory(storyId) {
        this.openLocationModal(null, storyId);
    }
    
    // ==================== FINANCE MANAGEMENT ====================
    
    openFinanceModal() {
        const modal = document.getElementById('financeModal');
        if (!modal) return;
        
        modal.classList.remove('hidden');
        this.switchFinanceTab('overview');
        this.renderFinanceModal();
    }
    
    switchFinanceTab(tabName) {
        document.querySelectorAll('.finance-tab').forEach(tab => {
            tab.classList.remove('active');
        });
        const activeTab = document.querySelector(`.finance-tab[data-tab="${tabName}"]`);
        if (activeTab) {
            activeTab.classList.add('active');
        }
        
        document.querySelectorAll('.finance-pane').forEach(pane => {
            pane.classList.remove('active');
        });
        const activePane = document.getElementById(`finance${tabName.charAt(0).toUpperCase() + tabName.slice(1)}`);
        if (activePane) {
            activePane.classList.add('active');
        }
    }
    
    renderFinanceModal() {
        const finance = this.data.home_tab.finance;
        
        // Render categories breakdown
        const categoriesGrid = document.getElementById('categoriesBreakdown');
        if (categoriesGrid) {
            categoriesGrid.innerHTML = finance.categories.map(category => {
                const percentage = category.budget > 0 ? (category.spent / category.budget) * 100 : 0;
                const isOverBudget = percentage > 100;
                
                return `
                    <div class="category-card">
                        <div class="category-name">${category.name}</div>
                        <div class="category-budget">
                            <span>₹${category.spent.toLocaleString()}</span>
                            <span>/ ₹${category.budget.toLocaleString()}</span>
                        </div>
                        <div class="category-progress">
                            <div class="category-progress-bar ${isOverBudget ? 'over-budget' : ''}" 
                                 style="width: ${Math.min(percentage, 100)}%"></div>
                        </div>
                        <div style="margin-top: 8px; font-size: 12px; color: var(--color-text-secondary);">
                            ${percentage.toFixed(1)}% of budget used
                        </div>
                    </div>
                `;
            }).join('');
        }
        
        // Render transactions
        this.renderTransactions();
        
        // Render savings analysis
        this.renderSavingsAnalysis();
    }
    
    renderTransactions() {
        const finance = this.data.home_tab.finance;
        const transactionsList = document.getElementById('transactionsList');
        
        if (!transactionsList) return;
        
        const allTransactions = [];
        finance.categories.forEach(category => {
            if (category.transactions) {
                category.transactions.forEach(transaction => {
                    allTransactions.push({
                        ...transaction,
                        category: category.name,
                        categoryId: category.id
                    });
                });
            }
        });
        
        // Sort by date (newest first)
        allTransactions.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        transactionsList.innerHTML = allTransactions.length > 0 ? allTransactions.map(transaction => `
            <div class="transaction-item">
                <div>
                    <div class="transaction-description">${this.escapeHtml(transaction.description)}</div>
                    <div class="transaction-date">${transaction.date} • ${transaction.category}</div>
                </div>
                <div class="transaction-amount">-₹${transaction.amount.toLocaleString()}</div>
            </div>
        `).join('') : '<p style="color: var(--color-text-secondary); text-align: center; padding: 20px;">No transactions yet.</p>';
    }
    
    renderSavingsAnalysis() {
        const finance = this.data.home_tab.finance;
        const savingsAnalysis = document.getElementById('savingsAnalysis');
        
        if (!savingsAnalysis) return;
        
        const totalSpent = finance.categories.reduce((sum, cat) => sum + cat.spent, 0);
        const totalBudget = finance.categories.reduce((sum, cat) => sum + cat.budget, 0);
        const potentialSavings = totalBudget - totalSpent;
        
        const suggestions = this.calculateSavingsSuggestions(finance);
        
        savingsAnalysis.innerHTML = `
            <div class="savings-overview">
                <h5>Monthly Summary</h5>
                <div class="budget-item">
                    <span class="label">Total Budget:</span>
                    <span class="value">₹${totalBudget.toLocaleString()}</span>
                </div>
                <div class="budget-item">
                    <span class="label">Total Spent:</span>
                    <span class="value">₹${totalSpent.toLocaleString()}</span>
                </div>
                <div class="budget-item">
                    <span class="label">Available:</span>
                    <span class="value" style="color: var(--color-success)">₹${potentialSavings.toLocaleString()}</span>
                </div>
            </div>
            <div class="savings-suggestions" style="margin-top: 24px;">
                <h5>Smart Savings Tips</h5>
                ${suggestions.length > 0 ? suggestions.map(suggestion => `
                    <div class="savings-suggestion">
                        <div class="suggestion-savings">💰 Save ₹${suggestion.potential_savings.toLocaleString()}</div>
                        <div class="suggestion-text">${suggestion.suggestion}</div>
                    </div>
                `).join('') : '<p style="color: var(--color-text-secondary);">Great job staying within budget!</p>'}
            </div>
        `;
    }
    
    // ==================== SETTINGS ====================
    
    loadSettings() {
        const writingGoal = document.getElementById('writingGoal');
        const writingReminders = document.getElementById('writingReminders');
        const reminderTime = document.getElementById('reminderTime');
        
        if (writingGoal) writingGoal.value = this.data.creative_tab.writing_stats.daily_goal;
        if (writingReminders) writingReminders.checked = this.data.settings.writing_reminders;
        if (reminderTime) reminderTime.value = this.data.settings.writing_reminder_time;
    }
    
    changeTheme(theme) {
        this.applyTheme(theme);
        this.data.settings.theme = theme;
        this.updateThemeToggleText();
        
        const themeSelect = document.getElementById('themeSelect');
        if (themeSelect) {
            themeSelect.value = theme;
        }
        
        this.saveData();
    }
    
    applyTheme(theme) {
        document.documentElement.setAttribute('data-color-scheme', theme);
    }
    
    exportData() {
        const dataStr = JSON.stringify(this.data, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        
        const link = document.createElement('a');
        link.href = URL.createObjectURL(dataBlob);
        link.download = `creative-dashboard-backup-${new Date().toISOString().split('T')[0]}.json`;
        link.click();
    }
    
    importData(file) {
        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const importedData = JSON.parse(e.target.result);
                
                if (confirm('This will replace all your current data. Are you sure?')) {
                    this.data = importedData;
                    this.saveData();
                    this.loadUserInterface();
                    alert('✅ Data imported successfully!');
                }
            } catch (error) {
                alert('❌ Invalid file format. Please select a valid backup file.');
            }
        };
        reader.readAsText(file);
    }
    
    clearAllData() {
        this.data = this.getInitialData();
        localStorage.removeItem('creativeAppData');
        this.loadUserInterface();
        alert('🗑️ All data cleared successfully!');
    }
    
    // ==================== UTILITY FUNCTIONS ====================
    
    generateId() {
        return Math.floor(Math.random() * 1000000) + Date.now();
    }
    
    closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('hidden');
        }
        this.currentEditingItem = null;
        
        // Clear script auto-save timer
        if (modalId === 'scriptModal' && this.scriptAutoSaveTimer) {
            clearInterval(this.scriptAutoSaveTimer);
            this.scriptAutoSaveTimer = null;
        }
    }
    
    showAutoSaveIndicator() {
        const indicator = document.getElementById('autoSaveIndicator');
        if (indicator) {
            indicator.classList.add('show');
            setTimeout(() => {
                indicator.classList.remove('show');
            }, 2000);
        }
    }
    
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    getCategoryColor(category) {
        const colors = {
            'Creative': '5',
            'Health': '3', 
            'Work': '1',
            'Personal': '2',
            'Learning': '8',
            'story_idea': '5',
            'character': '7',
            'location': '6',
            'general': '1'
        };
        return colors[category] || '1';
    }
    
    getPriorityColor(priority) {
        const colors = {
            'High': 'var(--color-error)',
            'Medium': 'var(--color-warning)', 
            'Low': 'var(--color-success)'
        };
        return colors[priority] || 'var(--color-text-secondary)';
    }
    
    getStatusColor(status) {
        const colors = {
            'Planning': '1',
            'First Draft': '2',
            'Revision': '6',
            'Complete': '3'
        };
        return colors[status] || '1';
    }
    
    formatCategoryName(category) {
        return category.replace('_', ' ').split(' ').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
    }
    
    getRelativeTime() {
        const now = new Date();
        const hours = now.getHours();
        
        if (hours < 2) return 'Just now';
        if (hours < 24) return `${hours} hours ago`;
        return `${Math.floor(hours / 24)} day${Math.floor(hours / 24) > 1 ? 's' : ''} ago`;
    }
}

// Global variable and initialization
let app;
window.app = null;

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded - Initializing Enhanced Creative Dashboard');
    
    try {
        app = new CreativeDashboard();
        window.app = app;
        console.log('Enhanced Creative Dashboard initialized successfully');
    } catch (error) {
        console.error('Failed to initialize Enhanced Creative Dashboard:', error);
    }
});

// Cleanup on page unload
window.addEventListener('beforeunload', function() {
    if (app) {
        app.saveData();
        if (app.timeUpdateTimer) {
            clearInterval(app.timeUpdateTimer);
        }
        if (app.autoSaveTimer) {
            clearInterval(app.autoSaveTimer);
        }
        if (app.scriptAutoSaveTimer) {
            clearInterval(app.scriptAutoSaveTimer);
        }
    }
});