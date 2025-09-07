// Enhanced Creative Dashboard with FIXED BUGS - Complete Implementation
class EnhancedCreativeDashboard {
    constructor() {
        this.currentTab = 'home';
        this.currentEditingItem = null;
        this.autoSaveTimer = null;
        this.scriptAutoSaveTimer = null;
        this.mediaRecorder = null;
        this.audioChunks = [];
        this.recognition = null;
        this.voiceTimeout = null;
        this.currentVoiceTarget = null;
        this.isRecording = false;
        this.selectedMoodTags = [];
        this.selectedTriggers = [];
        this.breathingTimer = null;
        this.meditationTimer = null;
        this.charts = {};
        
        // Initialize with enhanced data structure
        this.data = this.getInitialData();
        
        console.log('Enhanced Creative Dashboard constructor called');
    }
    
    init() {
        console.log('Initializing enhanced app...');
        this.loadData();
        this.setupEventListeners();
        this.loadUserInterface();
        this.initializeMediaSupport();
        this.updateTrashCount();
        this.initializeMentalHealthFeatures();
        console.log('Enhanced app initialization complete');
    }
    
    // ==================== ENHANCED DATA MANAGEMENT ====================
    
    getInitialData() {
        return {
            "home_tab": {
                "weather": {
                    "temperature": 27,
                    "condition": "Partly Cloudy",
                    "humidity": 70,
                    "wind_speed": 15
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
                        "title": "Practice 10 minutes of meditation",
                        "category": "Health",
                        "priority": "High",
                        "due": "Today",
                        "completed": false,
                        "created": "2025-09-07",
                        "notes": "Mental wellness priority"
                    }
                ],
                "quick_notes": [
                    {
                        "id": 1,
                        "content": "Story idea: Character dealing with mental health journey",
                        "timestamp": "2 hours ago",
                        "created": "2025-09-07T02:00:00",
                        "category": "story_idea"
                    },
                    {
                        "id": 2,
                        "content": "Feeling more creative after morning meditation",
                        "timestamp": "1 day ago",
                        "created": "2025-09-06T10:30:00",
                        "category": "personal"
                    }
                ],
                "finance": {
                    "current_month": "2025-09",
                    "monthly_budgets": {
                        "2025-09": {
                            "total_budget": 50000,
                            "spent": 32500,
                            "categories": [
                                {"id": 1, "name": "Food & Dining", "budget": 8000, "spent": 6200},
                                {"id": 2, "name": "Transportation", "budget": 5000, "spent": 4100},
                                {"id": 3, "name": "Entertainment", "budget": 3000, "spent": 2800},
                                {"id": 4, "name": "Health & Wellness", "budget": 3000, "spent": 1200},
                                {"id": 5, "name": "Creative Equipment", "budget": 8000, "spent": 3500},
                                {"id": 6, "name": "Utilities", "budget": 3000, "spent": 2900}
                            ]
                        }
                    },
                    "expenses_by_month": {
                        "2025-09": [
                            {"id": 1, "date": "2025-09-06", "amount": 450, "description": "Dinner at restaurant", "category": "Food & Dining"},
                            {"id": 2, "date": "2025-09-05", "amount": 280, "description": "Therapy session", "category": "Health & Wellness"},
                            {"id": 3, "date": "2025-09-04", "amount": 320, "description": "Meditation app subscription", "category": "Health & Wellness"}
                        ]
                    }
                },
                "health": {
                    "physical": {
                        "daily_steps": 7500,
                        "daily_goal": 10000,
                        "water_intake": 6,
                        "water_goal": 8,
                        "sleep_hours": 6.5,
                        "recommended_sleep": 8,
                        "weight": 70,
                        "weight_goal": 68
                    },
                    "mental": {
                        "daily_metrics": {
                            "mood": 7,
                            "stress_level": 4,
                            "anxiety_level": 3,
                            "energy_level": 6,
                            "sleep_quality": 7,
                            "meditation_minutes": 10,
                            "meditation_goal": 15,
                            "last_updated": "2025-09-07T08:00:00"
                        },
                        "daily_affirmation": "I am capable of creating amazing stories",
                        "mood_tags": ["creative", "focused", "optimistic"],
                        "gratitude_entries": [
                            {"id": 1, "entry": "Grateful for the opportunity to create stories", "date": "2025-09-07", "time": "07:00"},
                            {"id": 2, "entry": "Thankful for supportive friends and family", "date": "2025-09-07", "time": "07:01"}
                        ],
                        "mood_journal": [
                            {"id": 1, "mood": 8, "entry": "Had a really productive creative session today.", "triggers": ["creative_success"], "date": "2025-09-06", "time": "20:00"}
                        ],
                        "weekly_mental_stats": [
                            {"day": "Mon", "mood": 8, "stress": 3, "anxiety": 2, "energy": 7, "sleep_quality": 8},
                            {"day": "Tue", "mood": 6, "stress": 5, "anxiety": 4, "energy": 5, "sleep_quality": 6},
                            {"day": "Wed", "mood": 9, "stress": 2, "anxiety": 1, "energy": 8, "sleep_quality": 9},
                            {"day": "Thu", "mood": 7, "stress": 4, "anxiety": 3, "energy": 6, "sleep_quality": 7},
                            {"day": "Fri", "mood": 7, "stress": 4, "anxiety": 3, "energy": 6, "sleep_quality": 7},
                            {"day": "Sat", "mood": 8, "stress": 2, "anxiety": 1, "energy": 8, "sleep_quality": 8},
                            {"day": "Sun", "mood": 7, "stress": 3, "anxiety": 2, "energy": 7, "sleep_quality": 7}
                        ],
                        "wellness_goals": [
                            {"id": 1, "goal": "Meditate 15 minutes daily", "target_date": "2025-10-01", "current_streak": 5, "best_streak": 12, "progress": 75, "type": "meditation"}
                        ],
                        "breathing_exercises": {
                            "total_sessions": 8,
                            "minutes_today": 5,
                            "favorite_technique": "4-7-8 breathing"
                        },
                        "crisis_resources": [
                            {"name": "National Mental Health Helpline", "phone": "1800-599-0019", "available": "24/7"}
                        ]
                    }
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
                        "mood_inspiration": "Created during a particularly focused and energetic mood",
                        "tags": ["tech", "thriller", "ethics", "modern"]
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
                        "scene_location_id": null,
                        "scene_locations": [],
                        "outline": "ACT I: Introduction to protagonist's daily routine\nACT II: Discovery of the conspiracy\nACT III: Confrontation and resolution",
                        "notes": "Focus on authentic tech work experience"
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
                        "notes": "Based on real tech workers I know",
                        "created": "2025-09-01"
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
                        "contact_info": "facilities@techpark.com",
                        "created": "2025-09-01"
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
                    "projects_active": 3,
                    "scripts_completed": 0
                }
            },
            "files": {
                "uploaded_files": [],
                "storage_used": 0,
                "storage_limit": 52428800
            },
            "audio": {
                "recordings": [],
                "total_duration": 0
            },
            "trash": {
                "characters": [],
                "locations": [],
                "stories": [],
                "scripts": [],
                "tasks": [],
                "notes": [],
                "expenses": [],
                "files": [],
                "audio_recordings": []
            },
            "settings": {
                "theme": "dark",
                "notifications": true,
                "auto_save": true,
                "backup_frequency": "daily",
                "writing_reminders": true,
                "writing_reminder_time": "19:00",
                "mental_health_reminders": true,
                "mood_check_reminder_time": "20:00",
                "default_script_format": "feature",
                "language": "en",
                "currency": "INR",
                "timezone": "Asia/Kolkata",
                "privacy": {
                    "data_sharing": false,
                    "analytics": true,
                    "backup_cloud": false,
                    "mental_health_data_export": true
                }
            }
        };
    }
    
    loadData() {
        const savedData = localStorage.getItem('enhancedCreativeAppData');
        if (savedData) {
            try {
                const parsed = JSON.parse(savedData);
                this.data = this.mergeWithDefaults(parsed, this.getInitialData());
            } catch (e) {
                console.error('Error loading data:', e);
                this.data = this.getInitialData();
            }
        } else {
            this.data = this.getInitialData();
            this.saveData();
        }
    }
    
    mergeWithDefaults(saved, defaults) {
        const merged = { ...defaults };
        
        for (const key in saved) {
            if (saved.hasOwnProperty(key)) {
                if (typeof saved[key] === 'object' && saved[key] !== null && !Array.isArray(saved[key])) {
                    merged[key] = this.mergeWithDefaults(saved[key], defaults[key] || {});
                } else {
                    merged[key] = saved[key];
                }
            }
        }
        
        return merged;
    }
    
    saveData() {
        try {
            localStorage.setItem('enhancedCreativeAppData', JSON.stringify(this.data));
            this.showAutoSaveIndicator();
        } catch (e) {
            console.error('Error saving data:', e);
        }
    }
    
    // ==================== FIXED VOICE RECOGNITION ====================
    
    startVoiceInput(targetElementId) {
        this.currentVoiceTarget = targetElementId;
        
        if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
            alert('Speech recognition not supported in this browser');
            return;
        }
        
        // FIXED: Initialize recognition properly
        this.recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        this.recognition.continuous = false;
        this.recognition.interimResults = false;
        this.recognition.lang = 'en-US';
        
        // FIXED: Show listening indicator with close button
        this.showListeningIndicator();
        
        // FIXED: Set up timeout
        this.voiceTimeout = setTimeout(() => {
            this.stopVoiceRecognition();
            this.showNotification('Voice recognition timed out');
        }, 10000);
        
        this.recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            const targetElement = document.getElementById(this.currentVoiceTarget);
            if (targetElement) {
                if (targetElement.tagName === 'TEXTAREA' || targetElement.tagName === 'INPUT') {
                    targetElement.value = transcript;
                }
            }
            this.stopVoiceRecognition();
            this.showNotification('Voice input completed');
        };
        
        this.recognition.onerror = (event) => {
            console.error('Speech recognition error:', event.error);
            this.stopVoiceRecognition();
            this.showNotification('Voice recognition error: ' + event.error);
        };
        
        this.recognition.onend = () => {
            this.stopVoiceRecognition();
        };
        
        try {
            this.recognition.start();
        } catch (error) {
            console.error('Failed to start speech recognition:', error);
            this.stopVoiceRecognition();
            alert('Failed to start voice recognition');
        }
    }
    
    // FIXED: Proper voice recognition lifecycle
    stopVoiceRecognition() {
        if (this.recognition) {
            try {
                this.recognition.stop();
            } catch (error) {
                console.error('Error stopping recognition:', error);
            }
            this.recognition = null;
        }
        
        this.hideListeningIndicator();
        
        if (this.voiceTimeout) {
            clearTimeout(this.voiceTimeout);
            this.voiceTimeout = null;
        }
        
        this.currentVoiceTarget = null;
    }
    
    // FIXED: Proper indicator management
    showListeningIndicator() {
        const indicator = document.getElementById('voiceStatus');
        if (indicator) {
            indicator.classList.remove('hidden');
        }
    }
    
    hideListeningIndicator() {
        const indicator = document.getElementById('voiceStatus');
        if (indicator) {
            indicator.classList.add('hidden');
        }
    }
    
    // ==================== COMPLETE CHARACTER FUNCTIONALITY ====================
    
    openCharacterModal(characterId = null) {
        this.currentEditingItem = characterId;
        const modal = document.getElementById('characterModal');
        const title = document.getElementById('characterModalTitle');
        
        if (characterId) {
            title.textContent = 'Edit Character';
            this.populateCharacterForm(characterId);
        } else {
            title.textContent = 'Add Character';
            this.clearCharacterForm();
        }
        
        modal.classList.remove('hidden');
    }
    
    populateCharacterForm(characterId) {
        const character = this.data.creative_tab.characters.find(c => c.id === characterId);
        if (!character) return;
        
        document.getElementById('characterName').value = character.name || '';
        document.getElementById('characterAge').value = character.age || '';
        document.getElementById('characterOccupation').value = character.occupation || '';
        document.getElementById('characterDescription').value = character.description || '';
        document.getElementById('characterBackstory').value = character.backstory || '';
        document.getElementById('characterTraits').value = character.traits ? character.traits.join(', ') : '';
        document.getElementById('characterDialogue').value = character.dialogue_style || '';
        document.getElementById('characterArc').value = character.character_arc || '';
        document.getElementById('characterNotes').value = character.notes || '';
    }
    
    clearCharacterForm() {
        document.getElementById('characterName').value = '';
        document.getElementById('characterAge').value = '';
        document.getElementById('characterOccupation').value = '';
        document.getElementById('characterDescription').value = '';
        document.getElementById('characterBackstory').value = '';
        document.getElementById('characterTraits').value = '';
        document.getElementById('characterDialogue').value = '';
        document.getElementById('characterArc').value = '';
        document.getElementById('characterNotes').value = '';
    }
    
    saveCharacter() {
        const name = document.getElementById('characterName').value.trim();
        const age = parseInt(document.getElementById('characterAge').value) || '';
        const occupation = document.getElementById('characterOccupation').value.trim();
        const description = document.getElementById('characterDescription').value.trim();
        const backstory = document.getElementById('characterBackstory').value.trim();
        const traits = document.getElementById('characterTraits').value.trim();
        const dialogue = document.getElementById('characterDialogue').value.trim();
        const arc = document.getElementById('characterArc').value.trim();
        const notes = document.getElementById('characterNotes').value.trim();
        
        if (!name) {
            alert('Character name is required');
            return;
        }
        
        const characterData = {
            name: name,
            age: age,
            occupation: occupation,
            description: description,
            backstory: backstory,
            traits: traits ? traits.split(',').map(t => t.trim()) : [],
            dialogue_style: dialogue,
            character_arc: arc,
            notes: notes,
            story_ids: [],
            relationships: []
        };
        
        if (this.currentEditingItem) {
            // Edit existing character
            const index = this.data.creative_tab.characters.findIndex(c => c.id === this.currentEditingItem);
            if (index !== -1) {
                this.data.creative_tab.characters[index] = { ...this.data.creative_tab.characters[index], ...characterData };
                this.showNotification('Character updated successfully!');
            }
        } else {
            // Add new character
            characterData.id = this.generateId();
            characterData.created = new Date().toISOString();
            this.data.creative_tab.characters.push(characterData);
            this.showNotification('Character added successfully!');
        }
        
        this.saveData();
        this.renderCharacters();
        this.closeModal('characterModal');
    }
    
    deleteCharacter(characterId) {
        if (confirm('Are you sure you want to delete this character? It will be moved to trash.')) {
            const characterIndex = this.data.creative_tab.characters.findIndex(c => c.id === characterId);
            if (characterIndex !== -1) {
                const character = this.data.creative_tab.characters[characterIndex];
                character.deleted_at = new Date().toISOString();
                this.data.trash.characters.push(character);
                this.data.creative_tab.characters.splice(characterIndex, 1);
                
                this.saveData();
                this.renderCharacters();
                this.updateTrashCount();
                this.showNotification('Character moved to trash');
            }
        }
    }
    
    // ==================== COMPLETE LOCATION FUNCTIONALITY ====================
    
    openLocationModal(locationId = null) {
        this.currentEditingItem = locationId;
        const modal = document.getElementById('locationModal');
        const title = document.getElementById('locationModalTitle');
        
        if (locationId) {
            title.textContent = 'Edit Location';
            this.populateLocationForm(locationId);
        } else {
            title.textContent = 'Add Location';
            this.clearLocationForm();
        }
        
        modal.classList.remove('hidden');
    }
    
    populateLocationForm(locationId) {
        const location = this.data.creative_tab.locations.find(l => l.id === locationId);
        if (!location) return;
        
        document.getElementById('locationName').value = location.name || '';
        document.getElementById('locationType').value = location.type || 'Interior';
        document.getElementById('locationDescription').value = location.description || '';
        document.getElementById('locationAvailability').value = location.availability || '';
        document.getElementById('locationCost').value = location.cost || '';
        document.getElementById('locationAtmosphere').value = location.atmosphere || '';
        document.getElementById('locationPractical').value = location.practical_considerations || '';
        document.getElementById('locationAddress').value = location.address || '';
        document.getElementById('locationContact').value = location.contact_info || '';
        document.getElementById('locationNotes').value = location.notes || '';
    }
    
    clearLocationForm() {
        document.getElementById('locationName').value = '';
        document.getElementById('locationType').value = 'Interior';
        document.getElementById('locationDescription').value = '';
        document.getElementById('locationAvailability').value = '';
        document.getElementById('locationCost').value = '';
        document.getElementById('locationAtmosphere').value = '';
        document.getElementById('locationPractical').value = '';
        document.getElementById('locationAddress').value = '';
        document.getElementById('locationContact').value = '';
        document.getElementById('locationNotes').value = '';
    }
    
    saveLocation() {
        const name = document.getElementById('locationName').value.trim();
        const type = document.getElementById('locationType').value;
        const description = document.getElementById('locationDescription').value.trim();
        const availability = document.getElementById('locationAvailability').value.trim();
        const cost = document.getElementById('locationCost').value.trim();
        const atmosphere = document.getElementById('locationAtmosphere').value.trim();
        const practical = document.getElementById('locationPractical').value.trim();
        const address = document.getElementById('locationAddress').value.trim();
        const contact = document.getElementById('locationContact').value.trim();
        const notes = document.getElementById('locationNotes').value.trim();
        
        if (!name || !description) {
            alert('Location name and description are required');
            return;
        }
        
        const locationData = {
            name: name,
            type: type,
            description: description,
            availability: availability,
            cost: cost,
            atmosphere: atmosphere,
            practical_considerations: practical,
            address: address,
            contact_info: contact,
            notes: notes,
            story_ids: []
        };
        
        if (this.currentEditingItem) {
            // Edit existing location
            const index = this.data.creative_tab.locations.findIndex(l => l.id === this.currentEditingItem);
            if (index !== -1) {
                this.data.creative_tab.locations[index] = { ...this.data.creative_tab.locations[index], ...locationData };
                this.showNotification('Location updated successfully!');
            }
        } else {
            // Add new location
            locationData.id = this.generateId();
            locationData.created = new Date().toISOString();
            this.data.creative_tab.locations.push(locationData);
            this.showNotification('Location added successfully!');
        }
        
        this.saveData();
        this.renderLocations();
        this.updateScriptLocationDropdowns(); // Update dropdowns
        this.closeModal('locationModal');
    }
    
    deleteLocation(locationId) {
        if (confirm('Are you sure you want to delete this location? It will be moved to trash.')) {
            const locationIndex = this.data.creative_tab.locations.findIndex(l => l.id === locationId);
            if (locationIndex !== -1) {
                const location = this.data.creative_tab.locations[locationIndex];
                location.deleted_at = new Date().toISOString();
                this.data.trash.locations.push(location);
                this.data.creative_tab.locations.splice(locationIndex, 1);
                
                this.saveData();
                this.renderLocations();
                this.updateTrashCount();
                this.updateScriptLocationDropdowns();
                this.showNotification('Location moved to trash');
            }
        }
    }
    
    // ==================== COMPLETE STORY FUNCTIONALITY ====================
    
    openStoryModal(storyId = null) {
        this.currentEditingItem = storyId;
        const modal = document.getElementById('storyModal');
        const title = document.getElementById('storyModalTitle');
        
        if (storyId) {
            title.textContent = 'Edit Story';
            this.populateStoryForm(storyId);
        } else {
            title.textContent = 'Add Story';
            this.clearStoryForm();
        }
        
        modal.classList.remove('hidden');
    }
    
    populateStoryForm(storyId) {
        const story = this.data.creative_tab.story_ideas.find(s => s.id === storyId);
        if (!story) return;
        
        document.getElementById('storyTitle').value = story.title || '';
        document.getElementById('storyGenre').value = story.genre || '';
        document.getElementById('storyLogline').value = story.logline || '';
        document.getElementById('storyStatus').value = story.status || 'Concept';
        document.getElementById('storyTags').value = story.tags ? story.tags.join(', ') : '';
        document.getElementById('storyNotes').value = story.notes || '';
        document.getElementById('storyMoodInspiration').value = story.mood_inspiration || '';
    }
    
    clearStoryForm() {
        document.getElementById('storyTitle').value = '';
        document.getElementById('storyGenre').value = '';
        document.getElementById('storyLogline').value = '';
        document.getElementById('storyStatus').value = 'Concept';
        document.getElementById('storyTags').value = '';
        document.getElementById('storyNotes').value = '';
        document.getElementById('storyMoodInspiration').value = '';
    }
    
    saveStory() {
        const title = document.getElementById('storyTitle').value.trim();
        const genre = document.getElementById('storyGenre').value.trim();
        const logline = document.getElementById('storyLogline').value.trim();
        const status = document.getElementById('storyStatus').value;
        const tags = document.getElementById('storyTags').value.trim();
        const notes = document.getElementById('storyNotes').value.trim();
        const moodInspiration = document.getElementById('storyMoodInspiration').value.trim();
        
        if (!title || !genre || !logline) {
            alert('Title, genre, and logline are required');
            return;
        }
        
        const storyData = {
            title: title,
            genre: genre,
            logline: logline,
            status: status,
            tags: tags ? tags.split(',').map(t => t.trim()) : [],
            notes: notes,
            mood_inspiration: moodInspiration
        };
        
        if (this.currentEditingItem) {
            // Edit existing story
            const index = this.data.creative_tab.story_ideas.findIndex(s => s.id === this.currentEditingItem);
            if (index !== -1) {
                this.data.creative_tab.story_ideas[index] = { ...this.data.creative_tab.story_ideas[index], ...storyData };
                this.showNotification('Story updated successfully!');
            }
        } else {
            // Add new story
            storyData.id = this.generateId();
            storyData.created = new Date().toISOString();
            this.data.creative_tab.story_ideas.push(storyData);
            this.showNotification('Story added successfully!');
        }
        
        this.saveData();
        this.renderStories();
        this.updateScriptStoryDropdowns(); // Update dropdowns
        this.closeModal('storyModal');
    }
    
    deleteStory(storyId) {
        if (confirm('Are you sure you want to delete this story? It will be moved to trash.')) {
            const storyIndex = this.data.creative_tab.story_ideas.findIndex(s => s.id === storyId);
            if (storyIndex !== -1) {
                const story = this.data.creative_tab.story_ideas[storyIndex];
                story.deleted_at = new Date().toISOString();
                this.data.trash.stories.push(story);
                this.data.creative_tab.story_ideas.splice(storyIndex, 1);
                
                this.saveData();
                this.renderStories();
                this.updateTrashCount();
                this.updateScriptStoryDropdowns();
                this.showNotification('Story moved to trash');
            }
        }
    }
    
    // ==================== ENHANCED SCRIPT FUNCTIONALITY ====================
    
    openScriptModal(scriptId = null) {
        this.currentEditingItem = scriptId;
        const modal = document.getElementById('scriptModal');
        const title = document.getElementById('scriptModalTitle');
        
        // Update dropdowns before opening
        this.updateScriptStoryDropdowns();
        this.updateScriptLocationDropdowns();
        
        if (scriptId) {
            title.textContent = 'Edit Script';
            this.populateScriptForm(scriptId);
        } else {
            title.textContent = 'Add Script';
            this.clearScriptForm();
        }
        
        modal.classList.remove('hidden');
    }
    
    updateScriptStoryDropdowns() {
        const dropdown = document.getElementById('scriptStoryId');
        if (!dropdown) return;
        
        dropdown.innerHTML = '<option value="">Select a story (optional)</option>';
        
        this.data.creative_tab.story_ideas.forEach(story => {
            const option = document.createElement('option');
            option.value = story.id;
            option.textContent = story.title;
            dropdown.appendChild(option);
        });
    }
    
    updateScriptLocationDropdowns() {
        const dropdown = document.getElementById('scriptSceneLocation');
        if (!dropdown) return;
        
        dropdown.innerHTML = '<option value="">Select scene location</option>';
        
        this.data.creative_tab.locations.forEach(location => {
            const option = document.createElement('option');
            option.value = location.id;
            option.textContent = `${location.name} (${location.type})`;
            dropdown.appendChild(option);
        });
    }
    
    populateScriptForm(scriptId) {
        const script = this.data.creative_tab.scripts.find(s => s.id === scriptId);
        if (!script) return;
        
        document.getElementById('scriptTitle').value = script.title || '';
        document.getElementById('scriptType').value = script.type || 'Feature Screenplay';
        document.getElementById('scriptStoryId').value = script.story_id || '';
        document.getElementById('scriptTargetPages').value = script.target_pages || '';
        document.getElementById('scriptStatus').value = script.status || 'Planning';
        document.getElementById('scriptSceneLocation').value = script.scene_location_id || '';
        document.getElementById('scriptOutline').value = script.outline || '';
        document.getElementById('scriptNotes').value = script.notes || '';
        document.getElementById('scriptContent').value = script.content || '';
    }
    
    clearScriptForm() {
        document.getElementById('scriptTitle').value = '';
        document.getElementById('scriptType').value = 'Feature Screenplay';
        document.getElementById('scriptStoryId').value = '';
        document.getElementById('scriptTargetPages').value = '';
        document.getElementById('scriptStatus').value = 'Planning';
        document.getElementById('scriptSceneLocation').value = '';
        document.getElementById('scriptOutline').value = '';
        document.getElementById('scriptNotes').value = '';
        document.getElementById('scriptContent').value = '';
    }
    
    saveScript() {
        const title = document.getElementById('scriptTitle').value.trim();
        const type = document.getElementById('scriptType').value;
        const storyId = document.getElementById('scriptStoryId').value || null;
        const targetPages = parseInt(document.getElementById('scriptTargetPages').value) || 0;
        const status = document.getElementById('scriptStatus').value;
        const sceneLocationId = document.getElementById('scriptSceneLocation').value || null;
        const outline = document.getElementById('scriptOutline').value.trim();
        const notes = document.getElementById('scriptNotes').value.trim();
        const content = document.getElementById('scriptContent').value.trim();
        
        if (!title) {
            alert('Script title is required');
            return;
        }
        
        // Count words and calculate pages
        const wordCount = content ? content.trim().split(/\s+/).length : 0;
        const estimatedPages = Math.ceil(wordCount / 250); // Rough estimate
        
        const scriptData = {
            title: title,
            type: type,
            story_id: storyId,
            target_pages: targetPages,
            status: status,
            scene_location_id: sceneLocationId,  // NEW: Scene location
            outline: outline,
            notes: notes,
            content: content,
            word_count: wordCount,
            pages: estimatedPages,
            scenes: content ? (content.match(/FADE IN:/g) || []).length : 0,
            last_modified: new Date().toISOString()
        };
        
        if (this.currentEditingItem) {
            // Edit existing script
            const index = this.data.creative_tab.scripts.findIndex(s => s.id === this.currentEditingItem);
            if (index !== -1) {
                this.data.creative_tab.scripts[index] = { ...this.data.creative_tab.scripts[index], ...scriptData };
                this.showNotification('Script updated successfully!');
            }
        } else {
            // Add new script
            scriptData.id = this.generateId();
            scriptData.created = new Date().toISOString();
            this.data.creative_tab.scripts.push(scriptData);
            this.showNotification('Script added successfully!');
        }
        
        this.saveData();
        this.renderScripts();
        this.closeModal('scriptModal');
    }
    
    deleteScript(scriptId) {
        if (confirm('Are you sure you want to delete this script? It will be moved to trash.')) {
            const scriptIndex = this.data.creative_tab.scripts.findIndex(s => s.id === scriptId);
            if (scriptIndex !== -1) {
                const script = this.data.creative_tab.scripts[scriptIndex];
                script.deleted_at = new Date().toISOString();
                this.data.trash.scripts.push(script);
                this.data.creative_tab.scripts.splice(scriptIndex, 1);
                
                this.saveData();
                this.renderScripts();
                this.updateTrashCount();
                this.showNotification('Script moved to trash');
            }
        }
    }
    
    // ==================== COMPLETE TASK FUNCTIONALITY ====================
    
    openTaskModal(taskId = null) {
        this.currentEditingItem = taskId;
        const modal = document.getElementById('taskModal');
        const title = document.getElementById('taskModalTitle');
        
        if (taskId) {
            title.textContent = 'Edit Task';
            this.populateTaskForm(taskId);
        } else {
            title.textContent = 'Add Task';
            this.clearTaskForm();
            // Set default due date to today
            document.getElementById('taskDue').value = new Date().toISOString().split('T')[0];
        }
        
        modal.classList.remove('hidden');
    }
    
    populateTaskForm(taskId) {
        const task = this.data.home_tab.tasks.find(t => t.id === taskId);
        if (!task) return;
        
        document.getElementById('taskTitle').value = task.title || '';
        document.getElementById('taskCategory').value = task.category || 'Personal';
        document.getElementById('taskPriority').value = task.priority || 'Medium';
        document.getElementById('taskDue').value = task.due_date ? task.due_date : '';
        document.getElementById('taskNotes').value = task.notes || '';
    }
    
    clearTaskForm() {
        document.getElementById('taskTitle').value = '';
        document.getElementById('taskCategory').value = 'Personal';
        document.getElementById('taskPriority').value = 'Medium';
        document.getElementById('taskDue').value = '';
        document.getElementById('taskNotes').value = '';
    }
    
    saveTask() {
        const title = document.getElementById('taskTitle').value.trim();
        const category = document.getElementById('taskCategory').value;
        const priority = document.getElementById('taskPriority').value;
        const dueDate = document.getElementById('taskDue').value;
        const notes = document.getElementById('taskNotes').value.trim();
        
        if (!title) {
            alert('Task title is required');
            return;
        }
        
        const taskData = {
            title: title,
            category: category,
            priority: priority,
            due_date: dueDate,
            due: dueDate ? this.formatDueDate(dueDate) : '',
            notes: notes,
            completed: false
        };
        
        if (this.currentEditingItem) {
            // Edit existing task
            const index = this.data.home_tab.tasks.findIndex(t => t.id === this.currentEditingItem);
            if (index !== -1) {
                this.data.home_tab.tasks[index] = { ...this.data.home_tab.tasks[index], ...taskData };
                this.showNotification('Task updated successfully!');
            }
        } else {
            // Add new task
            taskData.id = this.generateId();
            taskData.created = new Date().toISOString().split('T')[0];
            this.data.home_tab.tasks.push(taskData);
            this.showNotification('Task added successfully!');
        }
        
        this.saveData();
        this.renderTasks();
        this.closeModal('taskModal');
    }
    
    formatDueDate(dateString) {
        const date = new Date(dateString);
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        
        if (date.toDateString() === today.toDateString()) {
            return 'Today';
        } else if (date.toDateString() === tomorrow.toDateString()) {
            return 'Tomorrow';
        } else {
            return date.toLocaleDateString();
        }
    }
    
    toggleTask(taskId) {
        const task = this.data.home_tab.tasks.find(t => t.id === taskId);
        if (task) {
            task.completed = !task.completed;
            this.saveData();
            this.renderTasks();
            
            if (task.completed) {
                this.showNotification('Task completed! 🎉');
            }
        }
    }
    
    deleteTask(taskId) {
        if (confirm('Are you sure you want to delete this task?')) {
            const taskIndex = this.data.home_tab.tasks.findIndex(t => t.id === taskId);
            if (taskIndex !== -1) {
                const task = this.data.home_tab.tasks[taskIndex];
                task.deleted_at = new Date().toISOString();
                this.data.trash.tasks.push(task);
                this.data.home_tab.tasks.splice(taskIndex, 1);
                
                this.saveData();
                this.renderTasks();
                this.updateTrashCount();
                this.showNotification('Task moved to trash');
            }
        }
    }
    
    // ==================== COMPLETE NOTE FUNCTIONALITY ====================
    
    openNoteModal(noteId = null) {
        this.currentEditingItem = noteId;
        const modal = document.getElementById('noteModal');
        const title = document.getElementById('noteModalTitle');
        
        if (noteId) {
            title.textContent = 'Edit Note';
            this.populateNoteForm(noteId);
        } else {
            title.textContent = 'Add Note';
            this.clearNoteForm();
        }
        
        modal.classList.remove('hidden');
    }
    
    populateNoteForm(noteId) {
        const note = this.data.home_tab.quick_notes.find(n => n.id === noteId);
        if (!note) return;
        
        document.getElementById('noteContent').value = note.content || '';
        document.getElementById('noteCategory').value = note.category || 'personal';
    }
    
    clearNoteForm() {
        document.getElementById('noteContent').value = '';
        document.getElementById('noteCategory').value = 'personal';
    }
    
    saveNote() {
        const content = document.getElementById('noteContent').value.trim();
        const category = document.getElementById('noteCategory').value;
        
        if (!content) {
            alert('Note content is required');
            return;
        }
        
        const now = new Date();
        const noteData = {
            content: content,
            category: category,
            created: now.toISOString(),
            timestamp: this.getRelativeTime(now)
        };
        
        if (this.currentEditingItem) {
            // Edit existing note
            const index = this.data.home_tab.quick_notes.findIndex(n => n.id === this.currentEditingItem);
            if (index !== -1) {
                this.data.home_tab.quick_notes[index] = { ...this.data.home_tab.quick_notes[index], ...noteData };
                this.showNotification('Note updated successfully!');
            }
        } else {
            // Add new note
            noteData.id = this.generateId();
            this.data.home_tab.quick_notes.unshift(noteData); // Add to beginning
            this.showNotification('Note added successfully!');
        }
        
        this.saveData();
        this.renderNotes();
        this.closeModal('noteModal');
    }
    
    deleteNote(noteId) {
        if (confirm('Are you sure you want to delete this note?')) {
            const noteIndex = this.data.home_tab.quick_notes.findIndex(n => n.id === noteId);
            if (noteIndex !== -1) {
                const note = this.data.home_tab.quick_notes[noteIndex];
                note.deleted_at = new Date().toISOString();
                this.data.trash.notes.push(note);
                this.data.home_tab.quick_notes.splice(noteIndex, 1);
                
                this.saveData();
                this.renderNotes();
                this.updateTrashCount();
                this.showNotification('Note moved to trash');
            }
        }
    }
    
    getRelativeTime(date) {
        const now = new Date();
        const diffInMinutes = Math.floor((now - date) / (1000 * 60));
        
        if (diffInMinutes < 1) return 'Just now';
        if (diffInMinutes < 60) return `${diffInMinutes} minutes ago`;
        if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)} hours ago`;
        return `${Math.floor(diffInMinutes / 1440)} days ago`;
    }
    
    // ==================== COMPLETE EXPENSE FUNCTIONALITY ====================
    
    openExpenseModal(expenseId = null) {
        this.currentEditingItem = expenseId;
        const modal = document.getElementById('expenseModal');
        const title = document.getElementById('expenseModalTitle');
        
        if (expenseId) {
            title.textContent = 'Edit Expense';
            this.populateExpenseForm(expenseId);
        } else {
            title.textContent = 'Add Expense';
            this.clearExpenseForm();
            // Set default date to today
            document.getElementById('expenseDate').value = new Date().toISOString().split('T')[0];
        }
        
        modal.classList.remove('hidden');
    }
    
    populateExpenseForm(expenseId) {
        const currentMonth = this.data.home_tab.finance.current_month;
        const expenses = this.data.home_tab.finance.expenses_by_month[currentMonth] || [];
        const expense = expenses.find(e => e.id === expenseId);
        
        if (!expense) return;
        
        document.getElementById('expenseDescription').value = expense.description || '';
        document.getElementById('expenseAmount').value = expense.amount || '';
        document.getElementById('expenseCategory').value = expense.category || 'Other';
        document.getElementById('expenseDate').value = expense.date || '';
    }
    
    clearExpenseForm() {
        document.getElementById('expenseDescription').value = '';
        document.getElementById('expenseAmount').value = '';
        document.getElementById('expenseCategory').value = 'Food & Dining';
        document.getElementById('expenseDate').value = '';
    }
    
    saveExpense() {
        const description = document.getElementById('expenseDescription').value.trim();
        const amount = parseFloat(document.getElementById('expenseAmount').value);
        const category = document.getElementById('expenseCategory').value;
        const date = document.getElementById('expenseDate').value;
        
        if (!description || !amount || !date) {
            alert('Description, amount, and date are required');
            return;
        }
        
        const expenseData = {
            description: description,
            amount: amount,
            category: category,
            date: date
        };
        
        const currentMonth = this.data.home_tab.finance.current_month;
        if (!this.data.home_tab.finance.expenses_by_month[currentMonth]) {
            this.data.home_tab.finance.expenses_by_month[currentMonth] = [];
        }
        
        if (this.currentEditingItem) {
            // Edit existing expense
            const expenses = this.data.home_tab.finance.expenses_by_month[currentMonth];
            const index = expenses.findIndex(e => e.id === this.currentEditingItem);
            if (index !== -1) {
                expenses[index] = { ...expenses[index], ...expenseData };
                this.showNotification('Expense updated successfully!');
            }
        } else {
            // Add new expense
            expenseData.id = this.generateId();
            this.data.home_tab.finance.expenses_by_month[currentMonth].unshift(expenseData);
            
            // Update category spending
            const budget = this.data.home_tab.finance.monthly_budgets[currentMonth];
            if (budget) {
                const categoryData = budget.categories.find(c => c.name === category);
                if (categoryData) {
                    categoryData.spent += amount;
                }
            }
            
            this.showNotification('Expense added successfully!');
        }
        
        this.saveData();
        this.renderFinanceOverview();
        this.closeModal('expenseModal');
    }
    
    // ==================== MENTAL HEALTH FEATURES ====================
    
    initializeMentalHealthFeatures() {
        this.loadAffirmations();
        this.updateMentalHealthOverview();
        this.setupMentalHealthSliders();
        this.renderGratitude();
        this.renderMoodJournal();
        this.renderWellnessGoals();
    }
    
    loadAffirmations() {
        this.affirmations = [
            "I am capable of creating amazing stories",
            "My creativity flows naturally and effortlessly",
            "I am resilient and can handle any challenge",
            "Each day brings new opportunities for growth",
            "I am worthy of love, success, and happiness",
            "My mental health is a priority and I honor it"
        ];
    }
    
    setupMentalHealthSliders() {
        const sliders = ['mood', 'stress', 'anxiety', 'energy', 'sleepQuality'];
        
        sliders.forEach(sliderName => {
            const slider = document.getElementById(`${sliderName}Slider`);
            const display = document.getElementById(`${sliderName}Display`);
            
            if (slider && display) {
                slider.oninput = () => {
                    display.textContent = slider.value;
                    if (sliderName === 'mood') {
                        this.updateMoodEmoji(parseInt(slider.value));
                    }
                };
            }
        });
    }
    
    updateMoodEmoji(moodValue) {
        const moodEmojis = {
            1: '😢', 2: '😞', 3: '😟', 4: '😐', 5: '😐',
            6: '😐', 7: '🙂', 8: '🙂', 9: '😊', 10: '😊'
        };
        
        const currentMoodEmoji = document.getElementById('currentMoodEmoji');
        if (currentMoodEmoji) {
            currentMoodEmoji.textContent = moodEmojis[moodValue];
        }
    }
    
    updateMentalHealthOverview() {
        const mental = this.data.home_tab.health.mental;
        const metrics = mental.daily_metrics;
        
        const currentMoodEmoji = document.getElementById('currentMoodEmoji');
        const currentMoodValue = document.getElementById('currentMoodValue');
        const stressFill = document.getElementById('stressFill');
        const energyFill = document.getElementById('energyFill');
        const meditationFill = document.getElementById('meditationFill');
        const stressValue = document.getElementById('stressValue');
        const energyValue = document.getElementById('energyValue');
        const meditationValue = document.getElementById('meditationValue');
        
        if (currentMoodEmoji) currentMoodEmoji.textContent = this.getMoodEmoji(metrics.mood);
        if (currentMoodValue) currentMoodValue.textContent = `${metrics.mood}/10`;
        if (stressFill) stressFill.style.width = `${metrics.stress_level * 10}%`;
        if (energyFill) energyFill.style.width = `${metrics.energy_level * 10}%`;
        if (meditationFill) meditationFill.style.width = `${(metrics.meditation_minutes / metrics.meditation_goal) * 100}%`;
        if (stressValue) stressValue.textContent = `${metrics.stress_level}/10`;
        if (energyValue) energyValue.textContent = `${metrics.energy_level}/10`;
        if (meditationValue) meditationValue.textContent = `${metrics.meditation_minutes}/${metrics.meditation_goal} min`;
    }
    
    getMoodEmoji(mood) {
        const moodEmojis = {
            1: '😢', 2: '😞', 3: '😟', 4: '😐', 5: '😐',
            6: '😐', 7: '🙂', 8: '🙂', 9: '😊', 10: '😊'
        };
        return moodEmojis[mood] || '😐';
    }
    
    // Quick Mood Check
    openQuickMoodModal() {
        const modal = document.getElementById('quickMoodModal');
        if (modal) {
            modal.classList.remove('hidden');
            this.selectedMoodTags = [];
            
            document.querySelectorAll('.quick-mood-btn').forEach(btn => btn.classList.remove('selected'));
            document.querySelectorAll('.tag-btn').forEach(btn => btn.classList.remove('selected'));
        }
    }
    
    selectQuickMood(mood, emoji) {
        this.selectedQuickMood = { mood: parseInt(mood), emoji };
        
        document.querySelectorAll('.quick-mood-btn').forEach(btn => btn.classList.remove('selected'));
        event.target.closest('.quick-mood-btn').classList.add('selected');
    }
    
    toggleMoodTag(tag) {
        const tagBtn = event.target;
        const index = this.selectedMoodTags.indexOf(tag);
        
        if (index === -1) {
            this.selectedMoodTags.push(tag);
            tagBtn.classList.add('selected');
        } else {
            this.selectedMoodTags.splice(index, 1);
            tagBtn.classList.remove('selected');
        }
    }
    
    saveQuickMood() {
        if (!this.selectedQuickMood) {
            alert('Please select a mood first');
            return;
        }
        
        const metrics = this.data.home_tab.health.mental.daily_metrics;
        metrics.mood = this.selectedQuickMood.mood;
        metrics.mood_tags = this.selectedMoodTags;
        metrics.last_updated = new Date().toISOString();
        
        this.saveData();
        this.updateMentalHealthOverview();
        this.closeModal('quickMoodModal');
        
        this.showNotification(`Mood logged: ${this.selectedQuickMood.emoji} ${this.selectedQuickMood.mood}/10`);
    }
    
    saveDailyMetrics() {
        const metrics = {
            mood: parseInt(document.getElementById('moodSlider')?.value || 7),
            stress_level: parseInt(document.getElementById('stressSlider')?.value || 4),
            anxiety_level: parseInt(document.getElementById('anxietySlider')?.value || 3),
            energy_level: parseInt(document.getElementById('energySlider')?.value || 6),
            sleep_quality: parseInt(document.getElementById('sleepQualitySlider')?.value || 7),
            meditation_minutes: parseInt(document.getElementById('meditationMinutes')?.value || 10),
            meditation_goal: this.data.home_tab.health.mental.daily_metrics.meditation_goal,
            last_updated: new Date().toISOString()
        };
        
        this.data.home_tab.health.mental.daily_metrics = metrics;
        this.saveData();
        this.updateMentalHealthOverview();
        
        const lastSaved = document.getElementById('lastSaved');
        if (lastSaved) {
            lastSaved.textContent = `Last saved: ${new Date().toLocaleTimeString()}`;
        }
        
        this.showNotification('Daily metrics saved successfully!');
    }
    
    openGratitudeModal() {
        const modal = document.getElementById('gratitudeModal');
        if (modal) {
            modal.classList.remove('hidden');
            document.getElementById('gratitudeEntry').value = '';
        }
    }
    
    saveGratitude() {
        const entryInput = document.getElementById('gratitudeEntry');
        if (!entryInput) return;
        
        const entry = entryInput.value.trim();
        if (!entry) {
            alert('Please enter a gratitude entry');
            return;
        }
        
        const gratitudeData = {
            id: this.generateId(),
            entry: entry,
            date: new Date().toISOString().split('T')[0],
            time: new Date().toTimeString().split(' ')[0].substring(0, 5)
        };
        
        this.data.home_tab.health.mental.gratitude_entries.unshift(gratitudeData);
        this.saveData();
        this.renderGratitude();
        this.closeModal('gratitudeModal');
        
        this.showNotification('Gratitude entry saved!');
    }
    
    renderGratitude() {
        const container = document.getElementById('todaysGratitude');
        if (!container) return;
        
        const today = new Date().toISOString().split('T')[0];
        const todaysEntries = this.data.home_tab.health.mental.gratitude_entries
            .filter(entry => entry.date === today);
        
        if (todaysEntries.length === 0) {
            container.innerHTML = '<p style="color: var(--color-text-secondary); font-size: var(--font-size-sm);">No gratitude entries for today yet.</p>';
            return;
        }
        
        container.innerHTML = todaysEntries.map(entry => `
            <div class="gratitude-item">
                <div class="gratitude-text">${entry.entry}</div>
                <div class="gratitude-time">${entry.time}</div>
            </div>
        `).join('');
    }
    
    openMoodJournalModal() {
        const modal = document.getElementById('moodJournalModal');
        if (modal) {
            modal.classList.remove('hidden');
            this.selectedTriggers = [];
            
            const journalMoodSlider = document.getElementById('journalMoodSlider');
            const journalMoodDisplay = document.getElementById('journalMoodDisplay');
            const moodJournalText = document.getElementById('moodJournalText');
            
            if (journalMoodSlider) journalMoodSlider.value = 7;
            if (journalMoodDisplay) journalMoodDisplay.textContent = 7;
            if (moodJournalText) moodJournalText.value = '';
            
            document.querySelectorAll('.trigger-tag').forEach(tag => tag.classList.remove('selected'));
        }
    }
    
    toggleTrigger(trigger) {
        const triggerBtn = event.target;
        const index = this.selectedTriggers.indexOf(trigger);
        
        if (index === -1) {
            this.selectedTriggers.push(trigger);
            triggerBtn.classList.add('selected');
        } else {
            this.selectedTriggers.splice(index, 1);
            triggerBtn.classList.remove('selected');
        }
    }
    
    saveMoodJournal() {
        const journalMoodSlider = document.getElementById('journalMoodSlider');
        const moodJournalText = document.getElementById('moodJournalText');
        
        if (!journalMoodSlider || !moodJournalText) return;
        
        const mood = parseInt(journalMoodSlider.value);
        const entry = moodJournalText.value.trim();
        
        if (!entry) {
            alert('Please enter a journal entry');
            return;
        }
        
        const journalData = {
            id: this.generateId(),
            mood: mood,
            entry: entry,
            triggers: [...this.selectedTriggers],
            date: new Date().toISOString().split('T')[0],
            time: new Date().toTimeString().split(' ')[0].substring(0, 5)
        };
        
        this.data.home_tab.health.mental.mood_journal.unshift(journalData);
        this.saveData();
        this.renderMoodJournal();
        this.closeModal('moodJournalModal');
        
        this.showNotification('Mood journal entry saved!');
    }
    
    renderMoodJournal() {
        const container = document.getElementById('moodJournalEntries');
        if (!container) return;
        
        const entries = this.data.home_tab.health.mental.mood_journal.slice(0, 5);
        
        if (entries.length === 0) {
            container.innerHTML = '<p style="color: var(--color-text-secondary); font-size: var(--font-size-sm);">No journal entries yet.</p>';
            return;
        }
        
        container.innerHTML = entries.map(entry => `
            <div class="journal-entry-item">
                <div class="journal-mood">Mood: ${this.getMoodEmoji(entry.mood)} ${entry.mood}/10</div>
                <div class="journal-text">${entry.entry}</div>
                <div class="journal-time">${entry.date} at ${entry.time}</div>
            </div>
        `).join('');
    }
    
    openWellnessGoalModal() {
        const modal = document.getElementById('wellnessGoalModal');
        if (modal) {
            modal.classList.remove('hidden');
            
            const targetDate = new Date();
            targetDate.setDate(targetDate.getDate() + 30);
            const wellnessGoalDate = document.getElementById('wellnessGoalDate');
            if (wellnessGoalDate) {
                wellnessGoalDate.value = targetDate.toISOString().split('T')[0];
            }
        }
    }
    
    saveWellnessGoal() {
        const wellnessGoalText = document.getElementById('wellnessGoalText');
        const wellnessGoalDate = document.getElementById('wellnessGoalDate');
        const wellnessGoalType = document.getElementById('wellnessGoalType');
        
        if (!wellnessGoalText || !wellnessGoalDate || !wellnessGoalType) return;
        
        const goalText = wellnessGoalText.value.trim();
        const targetDate = wellnessGoalDate.value;
        const goalType = wellnessGoalType.value;
        
        if (!goalText || !targetDate) {
            alert('Please fill in all fields');
            return;
        }
        
        const goalData = {
            id: this.generateId(),
            goal: goalText,
            target_date: targetDate,
            type: goalType,
            current_streak: 0,
            best_streak: 0,
            progress: 0,
            created: new Date().toISOString()
        };
        
        this.data.home_tab.health.mental.wellness_goals.push(goalData);
        this.saveData();
        this.renderWellnessGoals();
        this.closeModal('wellnessGoalModal');
        
        this.showNotification('Wellness goal added!');
    }
    
    renderWellnessGoals() {
        const container = document.getElementById('wellnessGoals');
        if (!container) return;
        
        const goals = this.data.home_tab.health.mental.wellness_goals;
        
        if (goals.length === 0) {
            container.innerHTML = '<p style="color: var(--color-text-secondary); font-size: var(--font-size-sm);">No wellness goals set yet.</p>';
            return;
        }
        
        container.innerHTML = goals.map(goal => `
            <div class="wellness-goal-item">
                <div class="goal-text">${goal.goal}</div>
                <div class="goal-progress">
                    <div class="goal-progress-bar">
                        <div class="goal-progress-fill" style="width: ${goal.progress}%"></div>
                    </div>
                    <span class="goal-percentage">${goal.progress}%</span>
                </div>
                <div class="goal-streak">Current streak: ${goal.current_streak} days</div>
            </div>
        `).join('');
    }
    
    startBreathingExercise() {
        const technique = document.getElementById('breathingTechnique')?.value || '4-7-8';
        const circle = document.getElementById('breathingCircle');
        const instructions = document.getElementById('breathingInstructions');
        const breathingText = document.getElementById('breathingText');
        const breathingTimer = document.getElementById('breathingTimer');
        
        if (instructions) instructions.classList.remove('hidden');
        
        let phase = 'inhale';
        let countdown = 4;
        
        const patterns = {
            '4-7-8': { inhale: 4, hold: 7, exhale: 8 },
            'box': { inhale: 4, hold: 4, exhale: 4, hold2: 4 },
            'triangle': { inhale: 4, hold: 4, exhale: 4 }
        };
        
        const pattern = patterns[technique];
        
        this.breathingTimer = setInterval(() => {
            if (breathingTimer) breathingTimer.textContent = countdown;
            
            if (countdown <= 0) {
                if (phase === 'inhale') {
                    phase = 'hold';
                    countdown = pattern.hold || 0;
                    if (breathingText) breathingText.textContent = 'Hold...';
                    if (circle) circle.classList.add('inhale');
                } else if (phase === 'hold') {
                    phase = 'exhale';
                    countdown = pattern.exhale;
                    if (breathingText) breathingText.textContent = 'Breathe out...';
                    if (circle) {
                        circle.classList.remove('inhale');
                        circle.classList.add('exhale');
                    }
                } else {
                    phase = 'inhale';
                    countdown = pattern.inhale;
                    if (breathingText) breathingText.textContent = 'Breathe in...';
                    if (circle) {
                        circle.classList.remove('exhale');
                    }
                }
            } else {
                countdown--;
            }
        }, 1000);
        
        setTimeout(() => {
            this.stopBreathingExercise();
        }, 120000);
    }
    
    stopBreathingExercise() {
        if (this.breathingTimer) {
            clearInterval(this.breathingTimer);
            this.breathingTimer = null;
        }
        
        const instructions = document.getElementById('breathingInstructions');
        const circle = document.getElementById('breathingCircle');
        
        if (instructions) instructions.classList.add('hidden');
        if (circle) {
            circle.classList.remove('inhale', 'exhale');
        }
        
        this.data.home_tab.health.mental.breathing_exercises.total_sessions++;
        this.data.home_tab.health.mental.breathing_exercises.minutes_today += 2;
        this.saveData();
        
        this.showNotification('Breathing exercise completed!');
    }
    
    openMeditationModal() {
        const modal = document.getElementById('meditationModal');
        if (modal) {
            modal.classList.remove('hidden');
            this.resetMeditationTimer();
        }
    }
    
    resetMeditationTimer() {
        const timerDuration = document.getElementById('timerDuration');
        const display = document.getElementById('timerDisplay');
        
        if (timerDuration && display) {
            const duration = parseInt(timerDuration.value || 15);
            const minutes = Math.floor(duration);
            const seconds = (duration % 1) * 60;
            display.textContent = `${minutes.toString().padStart(2, '0')}:${Math.floor(seconds).toString().padStart(2, '0')}`;
        }
    }
    
    startMeditationTimer() {
        const timerDuration = document.getElementById('timerDuration');
        if (!timerDuration) return;
        
        const duration = parseInt(timerDuration.value) * 60;
        let timeLeft = duration;
        
        const display = document.getElementById('timerDisplay');
        const startBtn = document.getElementById('startTimerBtn');
        const pauseBtn = document.getElementById('pauseTimerBtn');
        
        if (startBtn) startBtn.disabled = true;
        if (pauseBtn) pauseBtn.disabled = false;
        
        this.meditationTimer = setInterval(() => {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            
            if (display) {
                display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            }
            
            if (timeLeft <= 0) {
                this.completeMeditationSession(duration / 60);
                this.stopMeditationTimer();
                return;
            }
            
            timeLeft--;
        }, 1000);
    }
    
    stopMeditationTimer() {
        if (this.meditationTimer) {
            clearInterval(this.meditationTimer);
            this.meditationTimer = null;
        }
        
        const startBtn = document.getElementById('startTimerBtn');
        const pauseBtn = document.getElementById('pauseTimerBtn');
        
        if (startBtn) startBtn.disabled = false;
        if (pauseBtn) pauseBtn.disabled = true;
        
        this.resetMeditationTimer();
    }
    
    completeMeditationSession(minutes) {
        const metrics = this.data.home_tab.health.mental.daily_metrics;
        metrics.meditation_minutes += minutes;
        
        this.saveData();
        this.updateMentalHealthOverview();
        
        this.showNotification(`Meditation session complete! ${minutes} minutes added.`);
        this.closeModal('meditationModal');
    }
    
    showNewAffirmation() {
        const affirmationText = document.getElementById('dailyAffirmation');
        if (affirmationText && this.affirmations) {
            const randomAffirmation = this.affirmations[Math.floor(Math.random() * this.affirmations.length)];
            affirmationText.textContent = `"${randomAffirmation}"`;
            
            this.data.home_tab.health.mental.daily_affirmation = randomAffirmation;
            this.saveData();
        }
    }
    
    exportMentalHealthData() {
        const mentalHealthData = {
            daily_metrics: this.data.home_tab.health.mental.daily_metrics,
            gratitude_entries: this.data.home_tab.health.mental.gratitude_entries,
            mood_journal: this.data.home_tab.health.mental.mood_journal,
            weekly_mental_stats: this.data.home_tab.health.mental.weekly_mental_stats,
            wellness_goals: this.data.home_tab.health.mental.wellness_goals,
            breathing_exercises: this.data.home_tab.health.mental.breathing_exercises,
            exported_date: new Date().toISOString()
        };
        
        const dataStr = JSON.stringify(mentalHealthData, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        
        const link = document.createElement('a');
        link.href = URL.createObjectURL(dataBlob);
        link.download = `mental-health-data-${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        
        this.showNotification('Mental health data exported successfully!');
    }
    
    // ==================== COMPLETE TRASH SYSTEM ====================
    
    openTrashModal() {
        const modal = document.getElementById('trashModal');
        if (modal) {
            modal.classList.remove('hidden');
            this.renderTrashItems('all');
        }
    }
    
    renderTrashItems(type) {
        const container = document.getElementById('trashItems');
        if (!container) return;
        
        let items = [];
        
        if (type === 'all') {
            items = [
                ...this.data.trash.characters.map(item => ({...item, type: 'character'})),
                ...this.data.trash.locations.map(item => ({...item, type: 'location'})),
                ...this.data.trash.stories.map(item => ({...item, type: 'story'})),
                ...this.data.trash.scripts.map(item => ({...item, type: 'script'})),
                ...this.data.trash.tasks.map(item => ({...item, type: 'task'})),
                ...this.data.trash.notes.map(item => ({...item, type: 'note'})),
                ...this.data.trash.expenses.map(item => ({...item, type: 'expense'}))
            ];
        } else {
            const key = type === 'characters' ? 'characters' : type === 'locations' ? 'locations' : 
                       type === 'stories' ? 'stories' : type === 'scripts' ? 'scripts' :
                       type === 'tasks' ? 'tasks' : type === 'notes' ? 'notes' : 'expenses';
            items = this.data.trash[key].map(item => ({...item, type: type.slice(0, -1)}));
        }
        
        if (items.length === 0) {
            container.innerHTML = '<p style="color: var(--color-text-secondary); text-align: center; padding: 20px;">No items in trash.</p>';
            return;
        }
        
        container.innerHTML = items.map(item => `
            <div class="trash-item">
                <div class="trash-item-header">
                    <div class="trash-item-title">${item.title || item.name || item.content || item.description || 'Untitled'}</div>
                    <div class="trash-item-type">${item.type}</div>
                </div>
                <div class="trash-item-meta">
                    Deleted: ${new Date(item.deleted_at).toLocaleDateString()}
                </div>
                <div class="trash-item-actions">
                    <button class="btn btn--sm restore-btn" onclick="window.app.restoreItem('${item.type}', ${item.id})">Restore</button>
                    <button class="btn btn--sm permanent-delete-btn" onclick="window.app.permanentlyDeleteItem('${item.type}', ${item.id})">Delete Permanently</button>
                </div>
            </div>
        `).join('');
    }
    
    restoreItem(type, itemId) {
        const trashKey = type + 's';
        const activeKey = type === 'character' ? 'characters' : 
                         type === 'location' ? 'locations' :
                         type === 'story' ? 'story_ideas' :
                         type === 'script' ? 'scripts' :
                         type === 'task' ? 'tasks' :
                         type === 'note' ? 'quick_notes' :
                         'expenses_by_month';
        
        const trashItems = this.data.trash[trashKey];
        const itemIndex = trashItems.findIndex(item => item.id === itemId);
        
        if (itemIndex !== -1) {
            const item = trashItems[itemIndex];
            delete item.deleted_at;
            
            if (type === 'expense') {
                const currentMonth = this.data.home_tab.finance.current_month;
                if (!this.data.home_tab.finance.expenses_by_month[currentMonth]) {
                    this.data.home_tab.finance.expenses_by_month[currentMonth] = [];
                }
                this.data.home_tab.finance.expenses_by_month[currentMonth].push(item);
            } else if (type === 'task' || type === 'note') {
                this.data.home_tab[activeKey].push(item);
            } else {
                this.data.creative_tab[activeKey].push(item);
            }
            
            trashItems.splice(itemIndex, 1);
            
            this.saveData();
            this.renderTrashItems('all');
            this.updateTrashCount();
            this.renderCreativeContent();
            this.showNotification(`${type.charAt(0).toUpperCase() + type.slice(1)} restored successfully!`);
        }
    }
    
    permanentlyDeleteItem(type, itemId) {
        if (confirm('Are you sure you want to permanently delete this item? This cannot be undone.')) {
            const trashKey = type + 's';
            const trashItems = this.data.trash[trashKey];
            const itemIndex = trashItems.findIndex(item => item.id === itemId);
            
            if (itemIndex !== -1) {
                trashItems.splice(itemIndex, 1);
                this.saveData();
                this.renderTrashItems('all');
                this.updateTrashCount();
                this.showNotification(`${type.charAt(0).toUpperCase() + type.slice(1)} permanently deleted.`);
            }
        }
    }
    
    updateTrashCount() {
        const countEl = document.getElementById('trashCount');
        if (countEl) {
            const totalItems = Object.values(this.data.trash).reduce((sum, arr) => sum + arr.length, 0);
            if (totalItems > 0) {
                countEl.textContent = totalItems;
                countEl.classList.remove('hidden');
            } else {
                countEl.classList.add('hidden');
            }
        }
    }
    
    renderCreativeContent() {
        this.renderStories();
        this.renderScripts();
        this.renderCharacters();
        this.renderLocations();
        this.renderTasks();
        this.renderNotes();
        this.renderFinanceOverview();
    }
    
    // ==================== EVENT LISTENERS - FIXED ====================
    
    setupEventListeners() {
        console.log('Setting up enhanced event listeners...');
        
        // FIXED: Voice status close button
        const voiceStatusClose = document.getElementById('voiceStatusClose');
        if (voiceStatusClose) {
            voiceStatusClose.onclick = () => this.stopVoiceRecognition();
        }
        
        // Theme toggle
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.onclick = () => this.toggleTheme();
        }
        
        // Quick mood check buttons
        const moodCheckBtn = document.getElementById('moodCheckBtn');
        const quickMoodBtn = document.getElementById('quickMoodBtn');
        if (moodCheckBtn) moodCheckBtn.onclick = () => this.openQuickMoodModal();
        if (quickMoodBtn) quickMoodBtn.onclick = () => this.openQuickMoodModal();
        
        // Mental health action buttons
        const breathingBtn = document.getElementById('breathingBtn');
        const gratitudeBtn = document.getElementById('gratitudeBtn');
        const mentalHealthStatsBtn = document.getElementById('mentalHealthStatsBtn');
        
        if (breathingBtn) breathingBtn.onclick = () => this.startBreathingExercise();
        if (gratitudeBtn) gratitudeBtn.onclick = () => this.openGratitudeModal();
        if (mentalHealthStatsBtn) mentalHealthStatsBtn.onclick = () => this.switchTab('mental-health');
        
        // FIXED: Creative tab buttons - NO MORE "Feature coming soon"
        const addStoryBtn = document.getElementById('addStoryBtn');
        const addScriptBtn = document.getElementById('addScriptBtn');
        const addCharacterBtn = document.getElementById('addCharacterBtn');
        const addLocationBtn = document.getElementById('addLocationBtn');
        
        if (addStoryBtn) addStoryBtn.onclick = () => this.openStoryModal();
        if (addScriptBtn) addScriptBtn.onclick = () => this.openScriptModal();
        if (addCharacterBtn) addCharacterBtn.onclick = () => this.openCharacterModal();
        if (addLocationBtn) addLocationBtn.onclick = () => this.openLocationModal();
        
        // Home tab buttons
        const addTaskBtn = document.getElementById('addTaskBtn');
        const addNoteBtn = document.getElementById('addNoteBtn');
        const addExpenseBtn = document.getElementById('addExpenseBtn');
        
        if (addTaskBtn) addTaskBtn.onclick = () => this.openTaskModal();
        if (addNoteBtn) addNoteBtn.onclick = () => this.openNoteModal();
        if (addExpenseBtn) addExpenseBtn.onclick = () => this.openExpenseModal();
        
        // Mental Health Tab specific listeners
        const saveDailyMetricsBtn = document.getElementById('saveDailyMetricsBtn');
        const addGratitudeBtn = document.getElementById('addGratitudeBtn');
        const addMoodJournalBtn = document.getElementById('addMoodJournalBtn');
        const addWellnessGoalBtn = document.getElementById('addWellnessGoalBtn');
        const startBreathingBtn = document.getElementById('startBreathingBtn');
        const startMeditationBtn = document.getElementById('startMeditationBtn');
        const newAffirmationBtn = document.getElementById('newAffirmationBtn');
        const exportMentalHealthBtn = document.getElementById('exportMentalHealthBtn');
        
        if (saveDailyMetricsBtn) saveDailyMetricsBtn.onclick = () => this.saveDailyMetrics();
        if (addGratitudeBtn) addGratitudeBtn.onclick = () => this.openGratitudeModal();
        if (addMoodJournalBtn) addMoodJournalBtn.onclick = () => this.openMoodJournalModal();
        if (addWellnessGoalBtn) addWellnessGoalBtn.onclick = () => this.openWellnessGoalModal();
        if (startBreathingBtn) startBreathingBtn.onclick = () => this.startBreathingExercise();
        if (startMeditationBtn) startMeditationBtn.onclick = () => this.openMeditationModal();
        if (newAffirmationBtn) newAffirmationBtn.onclick = () => this.showNewAffirmation();
        if (exportMentalHealthBtn) exportMentalHealthBtn.onclick = () => this.exportMentalHealthData();
        
        // Trash button
        const trashBtn = document.getElementById('trashBtn');
        if (trashBtn) trashBtn.onclick = () => this.openTrashModal();
        
        // Modal form submissions
        const characterForm = document.getElementById('characterForm');
        const locationForm = document.getElementById('locationForm');
        const storyForm = document.getElementById('storyForm');
        const scriptForm = document.getElementById('scriptForm');
        const taskForm = document.getElementById('taskForm');
        const noteForm = document.getElementById('noteForm');
        const expenseForm = document.getElementById('expenseForm');
        const gratitudeForm = document.getElementById('gratitudeForm');
        const moodJournalForm = document.getElementById('moodJournalForm');
        const wellnessGoalForm = document.getElementById('wellnessGoalForm');
        const saveQuickMoodBtn = document.getElementById('saveQuickMood');
        
        if (characterForm) characterForm.onsubmit = (e) => { e.preventDefault(); this.saveCharacter(); };
        if (locationForm) locationForm.onsubmit = (e) => { e.preventDefault(); this.saveLocation(); };
        if (storyForm) storyForm.onsubmit = (e) => { e.preventDefault(); this.saveStory(); };
        if (scriptForm) scriptForm.onsubmit = (e) => { e.preventDefault(); this.saveScript(); };
        if (taskForm) taskForm.onsubmit = (e) => { e.preventDefault(); this.saveTask(); };
        if (noteForm) noteForm.onsubmit = (e) => { e.preventDefault(); this.saveNote(); };
        if (expenseForm) expenseForm.onsubmit = (e) => { e.preventDefault(); this.saveExpense(); };
        if (gratitudeForm) gratitudeForm.onsubmit = (e) => { e.preventDefault(); this.saveGratitude(); };
        if (moodJournalForm) moodJournalForm.onsubmit = (e) => { e.preventDefault(); this.saveMoodJournal(); };
        if (wellnessGoalForm) wellnessGoalForm.onsubmit = (e) => { e.preventDefault(); this.saveWellnessGoal(); };
        if (saveQuickMoodBtn) saveQuickMoodBtn.onclick = () => this.saveQuickMood();
        
        // Meditation timer controls
        const startTimerBtn = document.getElementById('startTimerBtn');
        const pauseTimerBtn = document.getElementById('pauseTimerBtn');
        const stopTimerBtn = document.getElementById('stopTimerBtn');
        const timerDuration = document.getElementById('timerDuration');
        
        if (startTimerBtn) startTimerBtn.onclick = () => this.startMeditationTimer();
        if (pauseTimerBtn) pauseTimerBtn.onclick = () => this.stopMeditationTimer();
        if (stopTimerBtn) stopTimerBtn.onclick = () => this.stopMeditationTimer();
        if (timerDuration) timerDuration.oninput = () => this.resetMeditationTimer();
        
        // Mood journal slider
        const journalMoodSlider = document.getElementById('journalMoodSlider');
        const journalMoodDisplay = document.getElementById('journalMoodDisplay');
        if (journalMoodSlider && journalMoodDisplay) {
            journalMoodSlider.oninput = () => {
                journalMoodDisplay.textContent = journalMoodSlider.value;
            };
        }
        
        // FIXED: Tab navigation - Use proper event delegation
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('nav-tab')) {
                e.preventDefault();
                const tabName = e.target.dataset.tab;
                if (tabName) {
                    this.switchTab(tabName);
                }
            }
        });
        
        // Trash tabs
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('trash-tab')) {
                e.preventDefault();
                document.querySelectorAll('.trash-tab').forEach(t => t.classList.remove('active'));
                e.target.classList.add('active');
                this.renderTrashItems(e.target.dataset.type);
            }
        });
        
        // Setup all modal listeners
        this.setupModalListeners();
        this.setupAutoSave();
        
        console.log('Enhanced event listeners setup complete');
    }
    
    setupModalListeners() {
        // Close modals
        document.querySelectorAll('.modal').forEach(modal => {
            const overlay = modal.querySelector('.modal-overlay');
            const closeBtn = modal.querySelector('.modal-close');
            
            if (overlay) overlay.onclick = () => this.closeModal(modal.id);
            if (closeBtn) closeBtn.onclick = () => this.closeModal(modal.id);
        });
        
        // Quick mood selection
        document.querySelectorAll('.quick-mood-btn').forEach(btn => {
            btn.onclick = (e) => {
                const mood = e.currentTarget.dataset.mood;
                const emoji = e.currentTarget.dataset.emoji;
                this.selectQuickMood(mood, emoji);
            };
        });
        
        // Mood tags
        document.querySelectorAll('.tag-btn').forEach(btn => {
            btn.onclick = (e) => {
                const tag = e.currentTarget.dataset.tag;
                this.toggleMoodTag(tag);
            };
        });
        
        // Trigger tags
        document.querySelectorAll('.trigger-tag').forEach(btn => {
            btn.onclick = (e) => {
                const trigger = e.currentTarget.dataset.trigger;
                this.toggleTrigger(trigger);
            };
        });
    }
    
    setupAutoSave() {
        this.autoSaveTimer = setInterval(() => {
            this.saveData();
        }, 30000);
        
        window.addEventListener('beforeunload', () => {
            this.saveData();
        });
    }
    
    // ==================== UI MANAGEMENT - FIXED ====================
    
    loadUserInterface() {
        console.log('Loading enhanced UI');
        
        this.applyTheme(this.data.settings.theme);
        this.updateThemeToggleText();
        this.loadHomeTab();
        this.updateTrashCount();
    }
    
    // FIXED: Tab switching now works properly
    switchTab(tabName) {
        console.log('Switching to tab:', tabName);
        
        // Update tab navigation
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
        
        // FIXED: Use correct tab IDs
        const tabMap = {
            'home': 'homeTab',
            'mental-health': 'mental-healthTab',
            'creative': 'creativeTab',
            'files': 'filesTab',
            'settings': 'settingsTab'
        };
        
        const activePane = document.getElementById(tabMap[tabName]);
        if (activePane) {
            activePane.classList.add('active');
        }
        
        this.currentTab = tabName;
        
        // Load tab-specific content
        if (tabName === 'home') {
            this.loadHomeTab();
        } else if (tabName === 'mental-health') {
            this.loadMentalHealthTab();
        } else if (tabName === 'creative') {
            this.loadCreativeTab();
        }
    }
    
    loadHomeTab() {
        console.log('Loading home tab');
        this.renderTasks();
        this.renderNotes();
        this.renderFinanceOverview();
        this.renderHealthOverview();
        this.updateMentalHealthOverview();
    }
    
    loadMentalHealthTab() {
        console.log('Loading mental health tab');
        this.initializeMentalHealthFeatures();
        
        const metrics = this.data.home_tab.health.mental.daily_metrics;
        const sliders = {
            'moodSlider': metrics.mood,
            'stressSlider': metrics.stress_level,
            'anxietySlider': metrics.anxiety_level,
            'energySlider': metrics.energy_level,
            'sleepQualitySlider': metrics.sleep_quality
        };
        
        Object.entries(sliders).forEach(([id, value]) => {
            const slider = document.getElementById(id);
            if (slider) {
                slider.value = value;
                const display = document.getElementById(id.replace('Slider', 'Display'));
                if (display) display.textContent = value;
            }
        });
        
        this.setupMentalHealthSliders();
        
        const meditationGoal = document.getElementById('meditationGoalDisplay');
        const meditationMinutes = document.getElementById('meditationMinutes');
        if (meditationGoal) meditationGoal.textContent = metrics.meditation_goal;
        if (meditationMinutes) meditationMinutes.value = metrics.meditation_minutes;
        
        const dailyAffirmation = document.getElementById('dailyAffirmation');
        if (dailyAffirmation) {
            dailyAffirmation.textContent = `"${this.data.home_tab.health.mental.daily_affirmation}"`;
        }
    }
    
    loadCreativeTab() { 
        console.log('Loading creative tab');
        this.renderStories();
        this.renderScripts();
        this.renderCharacters();
        this.renderLocations();
        this.renderWritingStats();
    }
    
    // ==================== RENDERING METHODS ====================
    
    renderTasks() {
        const tasksList = document.getElementById('tasksList');
        if (!tasksList) return;
        
        const tasks = this.data.home_tab.tasks.slice(0, 5);
        
        if (tasks.length === 0) {
            tasksList.innerHTML = '<p style="color: var(--color-text-secondary); text-align: center; padding: 20px;">No tasks yet. Add your first task!</p>';
            return;
        }
        
        tasksList.innerHTML = tasks.map(task => `
            <div class="task-item ${task.completed ? 'completed' : ''}">
                <div class="task-category-indicator category-${task.category.toLowerCase()}"></div>
                <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''} 
                       onchange="window.app.toggleTask(${task.id})">
                <div class="task-content">
                    <div class="task-title">${task.title}</div>
                    <div class="task-meta">
                        <span>${task.category}</span>
                        <span>${task.priority}</span>
                        <span>${task.due}</span>
                    </div>
                </div>
                <div class="task-actions">
                    <button class="btn btn--outline btn--sm" onclick="window.app.openTaskModal(${task.id})">Edit</button>
                    <button class="btn btn--outline btn--sm" onclick="window.app.deleteTask(${task.id})" style="color: var(--color-error);">Delete</button>
                </div>
            </div>
        `).join('');
    }
    
    renderNotes() {
        const notesList = document.getElementById('notesList');
        if (!notesList) return;
        
        const notes = this.data.home_tab.quick_notes.slice(0, 3);
        
        if (notes.length === 0) {
            notesList.innerHTML = '<p style="color: var(--color-text-secondary); text-align: center; padding: 20px;">No notes yet. Add your first note!</p>';
            return;
        }
        
        notesList.innerHTML = notes.map(note => `
            <div class="note-item">
                <div class="note-content">${note.content}</div>
                <div class="note-meta">
                    <span>${note.category}</span>
                    <span>${note.timestamp}</span>
                </div>
                <div class="note-actions">
                    <button class="btn btn--outline btn--sm" onclick="window.app.openNoteModal(${note.id})">Edit</button>
                    <button class="btn btn--outline btn--sm" onclick="window.app.deleteNote(${note.id})" style="color: var(--color-error);">Delete</button>
                </div>
            </div>
        `).join('');
    }
    
    renderFinanceOverview() {
        const currentMonth = this.data.home_tab.finance.current_month;
        const monthData = this.data.home_tab.finance.monthly_budgets[currentMonth];
        
        if (!monthData) return;
        
        const totalSpent = monthData.categories.reduce((sum, cat) => sum + cat.spent, 0);
        const remaining = monthData.total_budget - totalSpent;
        
        const monthlyBudgetEl = document.getElementById('monthlyBudget');
        const spentThisMonthEl = document.getElementById('spentThisMonth');
        const remainingBudgetEl = document.getElementById('remainingBudget');
        
        if (monthlyBudgetEl) monthlyBudgetEl.textContent = `₹${monthData.total_budget.toLocaleString()}`;
        if (spentThisMonthEl) spentThisMonthEl.textContent = `₹${totalSpent.toLocaleString()}`;
        if (remainingBudgetEl) remainingBudgetEl.textContent = `₹${remaining.toLocaleString()}`;
        
        // Render recent expenses
        const recentExpensesList = document.getElementById('recentExpensesList');
        if (recentExpensesList) {
            const expenses = this.data.home_tab.finance.expenses_by_month[currentMonth] || [];
            const recent = expenses.slice(0, 3);
            
            recentExpensesList.innerHTML = recent.map(expense => `
                <div class="recent-expense-item">
                    <div>
                        <div class="expense-description">${expense.description}</div>
                        <div class="expense-date">${expense.date}</div>
                    </div>
                    <div class="expense-amount">₹${expense.amount}</div>
                </div>
            `).join('');
        }
    }
    
    renderHealthOverview() {
        const health = this.data.home_tab.health.physical;
        
        const dailyStepsEl = document.getElementById('dailySteps');
        const waterIntakeEl = document.getElementById('waterIntake');
        const sleepHoursEl = document.getElementById('sleepHours');
        
        if (dailyStepsEl) dailyStepsEl.textContent = health.daily_steps.toLocaleString();
        if (waterIntakeEl) waterIntakeEl.textContent = health.water_intake;
        if (sleepHoursEl) sleepHoursEl.textContent = health.sleep_hours;
    }
    
    renderStories() {
        const storiesList = document.getElementById('storiesList');
        if (!storiesList) return;
        
        const stories = this.data.creative_tab.story_ideas;
        
        if (stories.length === 0) {
            storiesList.innerHTML = '<p style="color: var(--color-text-secondary); text-align: center; padding: 20px;">No stories yet. Create your first story!</p>';
            return;
        }
        
        storiesList.innerHTML = stories.map(story => `
            <div class="story-card">
                <h4 class="story-title">${story.title}</h4>
                <div class="story-genre">${story.genre}</div>
                <div class="story-logline">${story.logline}</div>
                <div class="story-meta">
                    <span class="story-status ${story.status.toLowerCase()}">${story.status}</span>
                </div>
                <div class="story-actions">
                    <button class="btn btn--outline btn--sm" onclick="window.app.openStoryModal(${story.id})">Edit</button>
                    <button class="btn btn--outline btn--sm" onclick="window.app.deleteStory(${story.id})" style="color: var(--color-error);">Delete</button>
                </div>
            </div>
        `).join('');
    }
    
    renderScripts() {
        const scriptsList = document.getElementById('scriptsList');
        if (!scriptsList) return;
        
        const scripts = this.data.creative_tab.scripts;
        
        if (scripts.length === 0) {
            scriptsList.innerHTML = '<p style="color: var(--color-text-secondary); text-align: center; padding: 20px;">No scripts yet. Start writing!</p>';
            return;
        }
        
        scriptsList.innerHTML = scripts.map(script => {
            const progress = script.target_pages > 0 ? (script.pages / script.target_pages) * 100 : 0;
            const location = script.scene_location_id ? 
                this.data.creative_tab.locations.find(l => l.id === script.scene_location_id) : null;
            
            return `
                <div class="script-item">
                    <div class="script-header">
                        <h4 class="script-title">${script.title}</h4>
                        <div class="script-stats">
                            <span>Pages: ${script.pages}/${script.target_pages}</span>
                            <span>Words: ${script.word_count}</span>
                            ${location ? `<span>Location: ${location.name}</span>` : ''}
                        </div>
                    </div>
                    <div class="script-progress">
                        <div class="script-progress-bar" style="width: ${progress}%"></div>
                    </div>
                    <div class="script-actions">
                        <button class="btn btn--outline btn--sm" onclick="window.app.openScriptModal(${script.id})">Edit</button>
                        <button class="btn btn--outline btn--sm" onclick="window.app.deleteScript(${script.id})" style="color: var(--color-error);">Delete</button>
                    </div>
                </div>
            `;
        }).join('');
    }
    
    renderCharacters() {
        const charactersList = document.getElementById('charactersList');
        if (!charactersList) return;
        
        const characters = this.data.creative_tab.characters;
        
        if (characters.length === 0) {
            charactersList.innerHTML = '<p style="color: var(--color-text-secondary); text-align: center; padding: 20px;">No characters yet. Create your first character!</p>';
            return;
        }
        
        charactersList.innerHTML = characters.map(character => `
            <div class="character-card">
                <h4 class="character-name">${character.name}</h4>
                <div class="character-occupation">${character.age} years old • ${character.occupation}</div>
                <div class="character-description">${character.description}</div>
                <div class="character-actions">
                    <button class="btn btn--outline btn--sm edit-btn" onclick="window.app.openCharacterModal(${character.id})">Edit</button>
                    <button class="btn btn--outline btn--sm delete-btn" onclick="window.app.deleteCharacter(${character.id})">Delete</button>
                </div>
            </div>
        `).join('');
    }
    
    renderLocations() {
        const locationsList = document.getElementById('locationsList');
        if (!locationsList) return;
        
        const locations = this.data.creative_tab.locations;
        
        if (locations.length === 0) {
            locationsList.innerHTML = '<p style="color: var(--color-text-secondary); text-align: center; padding: 20px;">No locations yet. Add your first location!</p>';
            return;
        }
        
        locationsList.innerHTML = locations.map(location => `
            <div class="location-card">
                <h4 class="location-name">${location.name}</h4>
                <div class="location-type">${location.type}</div>
                <div class="location-description">${location.description}</div>
                <div class="location-actions">
                    <button class="btn btn--outline btn--sm edit-btn" onclick="window.app.openLocationModal(${location.id})">Edit</button>
                    <button class="btn btn--outline btn--sm delete-btn" onclick="window.app.deleteLocation(${location.id})">Delete</button>
                </div>
            </div>
        `).join('');
    }
    
    renderWritingStats() {
        const stats = this.data.creative_tab.writing_stats;
        
        const wordsTodayEl = document.getElementById('wordsToday');
        const currentStreakEl = document.getElementById('currentStreak');
        const totalWordsEl = document.getElementById('totalWords');
        const moodCreativityCorrEl = document.getElementById('moodCreativityCorr');
        
        if (wordsTodayEl) wordsTodayEl.textContent = stats.words_today;
        if (currentStreakEl) currentStreakEl.textContent = stats.current_streak;
        if (totalWordsEl) totalWordsEl.textContent = stats.total_words.toLocaleString();
        if (moodCreativityCorrEl) moodCreativityCorrEl.textContent = '+40%';
    }
    
    closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('hidden');
        }
        this.currentEditingItem = null;
        
        if (modalId === 'meditationModal') {
            this.stopMeditationTimer();
        }
    }
    
    // Theme management
    toggleTheme() {
        const currentTheme = this.data.settings.theme;
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        this.changeTheme(newTheme);
    }
    
    changeTheme(theme) {
        this.applyTheme(theme);
        this.data.settings.theme = theme;
        this.updateThemeToggleText();
        this.saveData();
    }
    
    applyTheme(theme) {
        document.documentElement.setAttribute('data-color-scheme', theme);
    }
    
    updateThemeToggleText() {
        const themeToggleText = document.getElementById('themeToggleText');
        if (themeToggleText) {
            themeToggleText.textContent = this.data.settings.theme === 'dark' ? 'Light Mode' : 'Dark Mode';
        }
    }
    
    // Utility functions
    generateId() {
        return Math.floor(Math.random() * 1000000) + Date.now();
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
    
    showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            background: var(--color-success);
            color: var(--color-surface);
            padding: 12px 20px;
            border-radius: 8px;
            font-size: 14px;
            z-index: 1003;
            animation: slideIn 0.3s ease-out;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease-in';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }
    
    initializeMediaSupport() {
        // Media support placeholder
        console.log('Media support initialized');
    }
}

// Global variable and initialization
let app;
window.app = null;

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded - Initializing Enhanced Creative Dashboard');
    
    try {
        app = new EnhancedCreativeDashboard();
        window.app = app;
        
        // FIXED: Initialize the app properly
        app.init();
        
        console.log('Enhanced Creative Dashboard initialized successfully');
    } catch (error) {
        console.error('Failed to initialize Enhanced Creative Dashboard:', error);
    }
});

// Add CSS for notifications
const style = document.createElement('style');
style.textContent = `
@keyframes slideIn {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
}

@keyframes slideOut {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(100%); opacity: 0; }
}

.notification {
    box-shadow: var(--shadow-lg);
    font-weight: var(--font-weight-medium);
}
`;
document.head.appendChild(style);