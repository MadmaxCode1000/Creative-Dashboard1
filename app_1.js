// Enhanced Creative Dashboard - Complete Application
class CreativeDashboard {
    constructor() {
        this.currentTab = 'home';
        this.data = null;
        this.autoSaveTimer = null;
        this.mediaRecorder = null;
        this.audioChunks = [];
        this.isRecording = false;
        this.recognition = null;
        
        console.log('Creative Dashboard initializing...');
        this.init();
    }
    
    init() {
        this.loadData();
        this.setupEventListeners();
        this.initializeMediaSupport();
        this.loadUserInterface();
        this.startAutoSave();
        this.updateTime();
        console.log('Creative Dashboard ready!');
    }
    
    // ==================== DATA MANAGEMENT ====================
    
    loadData() {
        const storedData = localStorage.getItem('creativeDashboard');
        if (storedData) {
            try {
                this.data = JSON.parse(storedData);
                console.log('Data loaded from localStorage');
            } catch (error) {
                console.error('Error parsing stored data:', error);
                this.data = this.getDefaultData();
            }
        } else {
            this.data = this.getDefaultData();
            console.log('Using default data');
        }
    }
    
    saveData() {
        try {
            localStorage.setItem('creativeDashboard', JSON.stringify(this.data));
            this.showSaveIndicator();
        } catch (error) {
            console.error('Error saving data:', error);
            this.showNotification('Error saving data', 'error');
        }
    }
    
    getDefaultData() {
        return {
            home_tab: {
                tasks: [
                    {
                        id: 1,
                        title: "Write opening scene for Digital Nomad script",
                        category: "Creative",
                        priority: "High",
                        due: "Today",
                        completed: false,
                        created: "2025-09-07"
                    },
                    {
                        id: 2,
                        title: "Schedule health checkup",
                        category: "Health",
                        priority: "Medium",
                        due: "This week",
                        completed: false,
                        created: "2025-09-06"
                    },
                    {
                        id: 3,
                        title: "Research film equipment",
                        category: "Creative",
                        priority: "High",
                        due: "Tomorrow",
                        completed: false,
                        created: "2025-09-05"
                    },
                    {
                        id: 4,
                        title: "Plan weekend activities",
                        category: "Misc",
                        priority: "Medium",
                        due: "This week",
                        completed: false,
                        created: "2025-09-04"
                    }
                ],
                quick_notes: [
                    {
                        id: 1,
                        content: "Story idea: AI that helps people find their purpose",
                        timestamp: "2 hours ago",
                        created: "2025-09-07T02:00:00",
                        category: "story_idea"
                    }
                ],
                finance: {
                    current_month: "2025-09",
                    monthly_budgets: {
                        "2025-09": {
                            total_budget: 50000,
                            spent: 32500,
                            categories: [
                                { name: "Food & Dining", budget: 8000, spent: 6200 },
                                { name: "Transportation", budget: 5000, spent: 4100 },
                                { name: "Entertainment", budget: 3000, spent: 2800 },
                                { name: "Health", budget: 2000, spent: 1200 },
                                { name: "Creative Equipment", budget: 8000, spent: 3500 }
                            ]
                        }
                    },
                    expenses_by_month: {
                        "2025-09": [
                            {
                                id: 1,
                                date: "2025-09-06",
                                amount: 450,
                                description: "Dinner at restaurant",
                                category: "Food & Dining"
                            },
                            {
                                id: 2,
                                date: "2025-09-05",
                                amount: 280,
                                description: "Grocery shopping",
                                category: "Food & Dining"
                            }
                        ]
                    }
                },
                health: {
                    daily_steps: 7500,
                    daily_goal: 10000,
                    water_intake: 6,
                    water_goal: 8,
                    sleep_hours: 6.5,
                    recommended_sleep: 8
                }
            },
            creative_tab: {
                story_ideas: [
                    {
                        id: 1,
                        title: "The Digital Nomad's Dilemma",
                        genre: "Drama/Thriller",
                        logline: "A tech professional discovers their remote work is being used to manipulate global markets",
                        status: "Concept",
                        created: "2025-09-01"
                    },
                    {
                        id: 2,
                        title: "Bangalore Traffic Symphony",
                        genre: "Comedy/Musical",
                        logline: "A frustrated commuter imagines the city's traffic as an elaborate musical performance",
                        status: "Treatment",
                        created: "2025-08-28"
                    }
                ],
                scripts: [
                    {
                        id: 1,
                        title: "The Digital Nomad's Dilemma - Draft 1",
                        story_id: 1,
                        type: "Feature Screenplay",
                        pages: 0,
                        target_pages: 110,
                        status: "Planning"
                    }
                ],
                characters: [
                    {
                        id: 1,
                        name: "Arjun Sharma",
                        story_ids: [1],
                        age: 29,
                        occupation: "Software Developer",
                        description: "Ambitious tech professional who discovers his code is being misused"
                    }
                ],
                locations: [
                    {
                        id: 1,
                        name: "Tech Park Office",
                        story_ids: [1],
                        type: "Interior",
                        description: "Modern open-plan office in Electronic City",
                        cost: "₹5,000/day"
                    }
                ]
            },
            files: {
                uploaded_files: [],
                storage_used: 0
            },
            audio: {
                recordings: [],
                total_duration: 0
            },
            trash: {
                characters: [],
                locations: [],
                stories: [],
                scripts: [],
                tasks: [],
                notes: [],
                expenses: []
            },
            settings: {
                theme: "dark",
                auto_save_interval: 30,
                trash_retention_days: 30
            }
        };
    }
    
    // ==================== EVENT LISTENERS ====================
    
    setupEventListeners() {
        // Tab navigation
        document.querySelectorAll('.nav-tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                this.switchTab(e.target.dataset.tab);
            });
        });
        
        // Theme toggle
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }
        
        // Task management
        const addTaskBtn = document.getElementById('addTaskBtn');
        if (addTaskBtn) {
            addTaskBtn.addEventListener('click', () => this.showAddTaskModal());
        }
        
        // Task categories
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.filterTasks(e.target.dataset.category);
            });
        });
        
        // Notes
        const addNoteBtn = document.getElementById('addNoteBtn');
        if (addNoteBtn) {
            addNoteBtn.addEventListener('click', () => this.showAddNoteModal());
        }
        
        const voiceNoteBtn = document.getElementById('voiceNoteBtn');
        if (voiceNoteBtn) {
            voiceNoteBtn.addEventListener('click', () => this.startVoiceNote());
        }
        
        // Finance
        const addExpenseBtn = document.getElementById('addExpenseBtn');
        if (addExpenseBtn) {
            addExpenseBtn.addEventListener('click', () => this.showAddExpenseModal());
        }
        
        const financeMonthSelect = document.getElementById('financeMonthSelect');
        if (financeMonthSelect) {
            financeMonthSelect.addEventListener('change', (e) => {
                this.data.home_tab.finance.current_month = e.target.value;
                this.renderFinanceWidget();
                this.saveData();
            });
        }
        
        // Health
        const updateHealthBtn = document.getElementById('updateHealthBtn');
        if (updateHealthBtn) {
            updateHealthBtn.addEventListener('click', () => this.showUpdateHealthModal());
        }
        
        // Creative
        const addStoryBtn = document.getElementById('addStoryBtn');
        if (addStoryBtn) {
            addStoryBtn.addEventListener('click', () => this.showAddStoryModal());
        }
        
        const addScriptBtn = document.getElementById('addScriptBtn');
        if (addScriptBtn) {
            addScriptBtn.addEventListener('click', () => this.showAddScriptModal());
        }
        
        const addCharacterBtn = document.getElementById('addCharacterBtn');
        if (addCharacterBtn) {
            addCharacterBtn.addEventListener('click', () => this.showAddCharacterModal());
        }
        
        const addLocationBtn = document.getElementById('addLocationBtn');
        if (addLocationBtn) {
            addLocationBtn.addEventListener('click', () => this.showAddLocationModal());
        }
        
        // Files and Audio
        const uploadFileBtn = document.getElementById('uploadFileBtn');
        if (uploadFileBtn) {
            uploadFileBtn.addEventListener('click', () => this.showFileUpload());
        }
        
        const recordAudioBtn = document.getElementById('recordAudioBtn');
        if (recordAudioBtn) {
            recordAudioBtn.addEventListener('click', () => this.toggleAudioRecording());
        }
        
        // Trash
        const trashBtn = document.getElementById('trashBtn');
        if (trashBtn) {
            trashBtn.addEventListener('click', () => this.showTrashModal());
        }
        
        // Settings
        const exportDataBtn = document.getElementById('exportDataBtn');
        if (exportDataBtn) {
            exportDataBtn.addEventListener('click', () => this.exportData());
        }
        
        const clearDataBtn = document.getElementById('clearDataBtn');
        if (clearDataBtn) {
            clearDataBtn.addEventListener('click', () => this.clearAllData());
        }
    }
    
    // ==================== UI MANAGEMENT ====================
    
    switchTab(tabName) {
        // Hide all tab panes
        document.querySelectorAll('.tab-pane').forEach(pane => {
            pane.classList.remove('active');
        });
        
        // Remove active class from all tabs
        document.querySelectorAll('.nav-tab').forEach(tab => {
            tab.classList.remove('active');
        });
        
        // Show selected tab
        const targetPane = document.getElementById(tabName + 'Tab');
        const targetTab = document.querySelector(`[data-tab="${tabName}"]`);
        
        if (targetPane) targetPane.classList.add('active');
        if (targetTab) targetTab.classList.add('active');
        
        this.currentTab = tabName;
    }
    
    loadUserInterface() {
        this.renderTasks();
        this.renderNotes();
        this.renderFinanceWidget();
        this.renderHealthWidget();
        this.renderCreativeContent();
        this.updateTrashCount();
    }
    
    // ==================== TASK MANAGEMENT ====================
    
    renderTasks() {
        const tasksList = document.getElementById('tasksList');
        if (!tasksList) return;
        
        const tasks = this.data.home_tab.tasks || [];
        tasksList.innerHTML = '';
        
        tasks.forEach(task => {
            const taskElement = this.createTaskElement(task);
            tasksList.appendChild(taskElement);
        });
    }
    
    createTaskElement(task) {
        const taskDiv = document.createElement('div');
        taskDiv.className = `task-item ${task.completed ? 'completed' : ''}`;
        
        taskDiv.innerHTML = `
            <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''} 
                   onchange="app.toggleTaskComplete(${task.id})">
            <div class="task-content">
                <div class="task-title ${task.completed ? 'completed' : ''}">${task.title}</div>
                <div class="task-meta">
                    <span class="category-badge category-${task.category.toLowerCase()}">${task.category}</span>
                    <span class="priority-${task.priority.toLowerCase()}">${task.priority}</span>
                    <span>Due: ${task.due}</span>
                </div>
            </div>
            <div class="task-actions">
                <button onclick="app.editTask(${task.id})" title="Edit">✏️</button>
                <button onclick="app.deleteTask(${task.id})" title="Delete">🗑️</button>
            </div>
        `;
        
        return taskDiv;
    }
    
    showAddTaskModal() {
        const modal = this.createModal('Add Task', `
            <div class="form-group">
                <label for="taskTitle">Title:</label>
                <input type="text" id="taskTitle" class="form-control" required>
            </div>
            <div class="form-group">
                <label for="taskCategory">Category:</label>
                <select id="taskCategory" class="form-control">
                    <option value="Personal">Personal</option>
                    <option value="Work">Work</option>
                    <option value="Creative">Creative</option>
                    <option value="Health">Health</option>
                    <option value="Misc">Misc</option>
                </select>
            </div>
            <div class="form-group">
                <label for="taskPriority">Priority:</label>
                <select id="taskPriority" class="form-control">
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
            </div>
            <div class="form-group">
                <label for="taskDue">Due:</label>
                <input type="text" id="taskDue" class="form-control" placeholder="e.g., Today, Tomorrow, This week">
            </div>
        `);
        
        const saveBtn = modal.querySelector('.btn--primary');
        saveBtn.onclick = () => {
            const title = document.getElementById('taskTitle').value;
            const category = document.getElementById('taskCategory').value;
            const priority = document.getElementById('taskPriority').value;
            const due = document.getElementById('taskDue').value;
            
            if (title) {
                this.addTask(title, category, priority, due);
                this.closeModal(modal);
            }
        };
    }
    
    addTask(title, category, priority, due) {
        const newTask = {
            id: Date.now(),
            title: title,
            category: category,
            priority: priority,
            due: due,
            completed: false,
            created: new Date().toISOString().split('T')[0]
        };
        
        this.data.home_tab.tasks.push(newTask);
        this.renderTasks();
        this.saveData();
        this.showNotification('Task added successfully', 'success');
    }
    
    toggleTaskComplete(taskId) {
        const task = this.data.home_tab.tasks.find(t => t.id === taskId);
        if (task) {
            task.completed = !task.completed;
            this.renderTasks();
            this.saveData();
        }
    }
    
    deleteTask(taskId) {
        const taskIndex = this.data.home_tab.tasks.findIndex(t => t.id === taskId);
        if (taskIndex > -1) {
            const task = this.data.home_tab.tasks.splice(taskIndex, 1)[0];
            task.deleted_at = new Date().toISOString();
            this.data.trash.tasks.push(task);
            this.renderTasks();
            this.updateTrashCount();
            this.saveData();
            this.showNotification('Task moved to trash', 'info');
        }
    }
    
    filterTasks(category) {
        const tasks = document.querySelectorAll('.task-item');
        tasks.forEach(task => {
            if (category === 'all') {
                task.style.display = 'flex';
            } else {
                const taskCategory = task.querySelector('.category-badge').textContent;
                task.style.display = taskCategory === category ? 'flex' : 'none';
            }
        });
    }
    
    // ==================== NOTES MANAGEMENT ====================
    
    renderNotes() {
        const notesList = document.getElementById('notesList');
        if (!notesList) return;
        
        const notes = this.data.home_tab.quick_notes || [];
        notesList.innerHTML = '';
        
        notes.forEach(note => {
            const noteElement = this.createNoteElement(note);
            notesList.appendChild(noteElement);
        });
    }
    
    createNoteElement(note) {
        const noteDiv = document.createElement('div');
        noteDiv.className = 'note-item';
        
        noteDiv.innerHTML = `
            <div class="note-content">
                <div class="note-text">${note.content}</div>
                <div class="note-meta">
                    <span>${note.timestamp}</span>
                    <span class="category-badge">${note.category || 'general'}</span>
                </div>
            </div>
            <div class="note-actions">
                <button onclick="app.editNote(${note.id})" title="Edit">✏️</button>
                <button onclick="app.deleteNote(${note.id})" title="Delete">🗑️</button>
            </div>
        `;
        
        return noteDiv;
    }
    
    showAddNoteModal() {
        const modal = this.createModal('Add Note', `
            <div class="form-group">
                <label for="noteContent">Note:</label>
                <textarea id="noteContent" class="form-control" rows="4" required></textarea>
            </div>
            <div class="form-group">
                <label for="noteCategory">Category:</label>
                <select id="noteCategory" class="form-control">
                    <option value="general">General</option>
                    <option value="story_idea">Story Idea</option>
                    <option value="character">Character</option>
                    <option value="location">Location</option>
                </select>
            </div>
        `);
        
        const saveBtn = modal.querySelector('.btn--primary');
        saveBtn.onclick = () => {
            const content = document.getElementById('noteContent').value;
            const category = document.getElementById('noteCategory').value;
            
            if (content) {
                this.addNote(content, category);
                this.closeModal(modal);
            }
        };
    }
    
    addNote(content, category) {
        const newNote = {
            id: Date.now(),
            content: content,
            category: category,
            timestamp: this.getRelativeTime(new Date()),
            created: new Date().toISOString()
        };
        
        this.data.home_tab.quick_notes.push(newNote);
        this.renderNotes();
        this.saveData();
        this.showNotification('Note added successfully', 'success');
    }
    
    deleteNote(noteId) {
        const noteIndex = this.data.home_tab.quick_notes.findIndex(n => n.id === noteId);
        if (noteIndex > -1) {
            const note = this.data.home_tab.quick_notes.splice(noteIndex, 1)[0];
            note.deleted_at = new Date().toISOString();
            this.data.trash.notes.push(note);
            this.renderNotes();
            this.updateTrashCount();
            this.saveData();
            this.showNotification('Note moved to trash', 'info');
        }
    }
    
    // ==================== FINANCE MANAGEMENT ====================
    
    renderFinanceWidget() {
        const currentMonth = this.data.home_tab.finance.current_month;
        const monthData = this.data.home_tab.finance.monthly_budgets[currentMonth];
        
        if (monthData) {
            document.getElementById('monthlyBudget').textContent = `₹${monthData.total_budget.toLocaleString()}`;
            document.getElementById('monthlySpent').textContent = `₹${monthData.spent.toLocaleString()}`;
            document.getElementById('monthlyRemaining').textContent = `₹${(monthData.total_budget - monthData.spent).toLocaleString()}`;
        }
        
        this.renderExpenses();
    }
    
    renderExpenses() {
        const expensesList = document.getElementById('expensesList');
        if (!expensesList) return;
        
        const currentMonth = this.data.home_tab.finance.current_month;
        const expenses = this.data.home_tab.finance.expenses_by_month[currentMonth] || [];
        
        expensesList.innerHTML = '';
        
        expenses.forEach(expense => {
            const expenseElement = this.createExpenseElement(expense);
            expensesList.appendChild(expenseElement);
        });
    }
    
    createExpenseElement(expense) {
        const expenseDiv = document.createElement('div');
        expenseDiv.className = 'expense-item';
        
        expenseDiv.innerHTML = `
            <div class="expense-content">
                <div class="expense-description">${expense.description}</div>
                <div class="expense-meta">
                    <span>₹${expense.amount}</span>
                    <span class="category-badge">${expense.category}</span>
                    <span>${expense.date}</span>
                </div>
            </div>
            <div class="expense-actions">
                <button onclick="app.editExpense(${expense.id})" title="Edit">✏️</button>
                <button onclick="app.deleteExpense(${expense.id})" title="Delete">🗑️</button>
            </div>
        `;
        
        return expenseDiv;
    }
    
    showAddExpenseModal() {
        const modal = this.createModal('Add Expense', `
            <div class="form-group">
                <label for="expenseAmount">Amount (₹):</label>
                <input type="number" id="expenseAmount" class="form-control" required>
            </div>
            <div class="form-group">
                <label for="expenseDescription">Description:</label>
                <input type="text" id="expenseDescription" class="form-control" required>
            </div>
            <div class="form-group">
                <label for="expenseCategory">Category:</label>
                <select id="expenseCategory" class="form-control">
                    <option value="Food & Dining">Food & Dining</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Health">Health</option>
                    <option value="Creative Equipment">Creative Equipment</option>
                </select>
            </div>
            <div class="form-group">
                <label for="expenseDate">Date:</label>
                <input type="date" id="expenseDate" class="form-control" value="${new Date().toISOString().split('T')[0]}">
            </div>
        `);
        
        const saveBtn = modal.querySelector('.btn--primary');
        saveBtn.onclick = () => {
            const amount = parseFloat(document.getElementById('expenseAmount').value);
            const description = document.getElementById('expenseDescription').value;
            const category = document.getElementById('expenseCategory').value;
            const date = document.getElementById('expenseDate').value;
            
            if (amount && description) {
                this.addExpense(amount, description, category, date);
                this.closeModal(modal);
            }
        };
    }
    
    addExpense(amount, description, category, date) {
        const currentMonth = this.data.home_tab.finance.current_month;
        
        if (!this.data.home_tab.finance.expenses_by_month[currentMonth]) {
            this.data.home_tab.finance.expenses_by_month[currentMonth] = [];
        }
        
        const newExpense = {
            id: Date.now(),
            amount: amount,
            description: description,
            category: category,
            date: date
        };
        
        this.data.home_tab.finance.expenses_by_month[currentMonth].push(newExpense);
        
        // Update monthly spent
        if (this.data.home_tab.finance.monthly_budgets[currentMonth]) {
            this.data.home_tab.finance.monthly_budgets[currentMonth].spent += amount;
        }
        
        this.renderFinanceWidget();
        this.saveData();
        this.showNotification('Expense added successfully', 'success');
    }
    
    deleteExpense(expenseId) {
        const currentMonth = this.data.home_tab.finance.current_month;
        const expenses = this.data.home_tab.finance.expenses_by_month[currentMonth] || [];
        const expenseIndex = expenses.findIndex(e => e.id === expenseId);
        
        if (expenseIndex > -1) {
            const expense = expenses.splice(expenseIndex, 1)[0];
            expense.deleted_at = new Date().toISOString();
            this.data.trash.expenses.push(expense);
            
            // Update monthly spent
            if (this.data.home_tab.finance.monthly_budgets[currentMonth]) {
                this.data.home_tab.finance.monthly_budgets[currentMonth].spent -= expense.amount;
            }
            
            this.renderFinanceWidget();
            this.updateTrashCount();
            this.saveData();
            this.showNotification('Expense moved to trash', 'info');
        }
    }
    
    // ==================== HEALTH MANAGEMENT ====================
    
    renderHealthWidget() {
        const health = this.data.home_tab.health;
        
        document.getElementById('dailySteps').textContent = health.daily_steps.toLocaleString();
        document.getElementById('waterIntake').textContent = health.water_intake;
        document.getElementById('sleepHours').textContent = health.sleep_hours;
    }
    
    showUpdateHealthModal() {
        const health = this.data.home_tab.health;
        
        const modal = this.createModal('Update Health Metrics', `
            <div class="form-group">
                <label for="stepsInput">Daily Steps:</label>
                <input type="number" id="stepsInput" class="form-control" value="${health.daily_steps}">
            </div>
            <div class="form-group">
                <label for="waterInput">Water Intake (glasses):</label>
                <input type="number" id="waterInput" class="form-control" value="${health.water_intake}">
            </div>
            <div class="form-group">
                <label for="sleepInput">Sleep Hours:</label>
                <input type="number" id="sleepInput" class="form-control" step="0.5" value="${health.sleep_hours}">
            </div>
        `);
        
        const saveBtn = modal.querySelector('.btn--primary');
        saveBtn.onclick = () => {
            const steps = parseInt(document.getElementById('stepsInput').value);
            const water = parseInt(document.getElementById('waterInput').value);
            const sleep = parseFloat(document.getElementById('sleepInput').value);
            
            this.updateHealth(steps, water, sleep);
            this.closeModal(modal);
        };
    }
    
    updateHealth(steps, water, sleep) {
        this.data.home_tab.health.daily_steps = steps;
        this.data.home_tab.health.water_intake = water;
        this.data.home_tab.health.sleep_hours = sleep;
        
        this.renderHealthWidget();
        this.saveData();
        this.showNotification('Health metrics updated', 'success');
    }
    
    // ==================== CREATIVE CONTENT ====================
    
    renderCreativeContent() {
        this.renderStories();
        this.renderScripts();
        this.renderCharacters();
        this.renderLocations();
    }
    
    renderStories() {
        const storiesList = document.getElementById('storiesList');
        if (!storiesList) return;
        
        const stories = this.data.creative_tab.story_ideas || [];
        storiesList.innerHTML = '';
        
        stories.forEach(story => {
            const storyElement = this.createStoryElement(story);
            storiesList.appendChild(storyElement);
        });
    }
    
    createStoryElement(story) {
        const storyDiv = document.createElement('div');
        storyDiv.className = 'story-item';
        
        storyDiv.innerHTML = `
            <div class="item-title">
                ${story.title}
                <div class="item-actions">
                    <button onclick="app.editStory(${story.id})" title="Edit">✏️</button>
                    <button onclick="app.deleteStory(${story.id})" title="Delete">🗑️</button>
                </div>
            </div>
            <div class="item-meta">
                <span class="status-badge status-${story.status.toLowerCase()}">${story.status}</span>
                <span>${story.genre}</span>
                <span>Created: ${story.created}</span>
            </div>
            <div class="item-description">${story.logline}</div>
        `;
        
        return storyDiv;
    }
    
    showAddStoryModal() {
        const modal = this.createModal('Add Story Idea', `
            <div class="form-group">
                <label for="storyTitle">Title:</label>
                <input type="text" id="storyTitle" class="form-control" required>
            </div>
            <div class="form-group">
                <label for="storyGenre">Genre:</label>
                <input type="text" id="storyGenre" class="form-control" placeholder="e.g., Drama/Thriller" required>
            </div>
            <div class="form-group">
                <label for="storyLogline">Logline:</label>
                <textarea id="storyLogline" class="form-control" rows="3" required></textarea>
            </div>
            <div class="form-group">
                <label for="storyStatus">Status:</label>
                <select id="storyStatus" class="form-control">
                    <option value="Concept">Concept</option>
                    <option value="Treatment">Treatment</option>
                    <option value="Outline">Outline</option>
                    <option value="Script">Script</option>
                </select>
            </div>
        `);
        
        const saveBtn = modal.querySelector('.btn--primary');
        saveBtn.onclick = () => {
            const title = document.getElementById('storyTitle').value;
            const genre = document.getElementById('storyGenre').value;
            const logline = document.getElementById('storyLogline').value;
            const status = document.getElementById('storyStatus').value;
            
            if (title && genre && logline) {
                this.addStory(title, genre, logline, status);
                this.closeModal(modal);
            }
        };
    }
    
    addStory(title, genre, logline, status) {
        const newStory = {
            id: Date.now(),
            title: title,
            genre: genre,
            logline: logline,
            status: status,
            created: new Date().toISOString().split('T')[0]
        };
        
        this.data.creative_tab.story_ideas.push(newStory);
        this.renderStories();
        this.saveData();
        this.showNotification('Story idea added successfully', 'success');
    }
    
    deleteStory(storyId) {
        const storyIndex = this.data.creative_tab.story_ideas.findIndex(s => s.id === storyId);
        if (storyIndex > -1) {
            const story = this.data.creative_tab.story_ideas.splice(storyIndex, 1)[0];
            story.deleted_at = new Date().toISOString();
            this.data.trash.stories.push(story);
            this.renderStories();
            this.updateTrashCount();
            this.saveData();
            this.showNotification('Story moved to trash', 'info');
        }
    }
    
    renderScripts() {
        const scriptsList = document.getElementById('scriptsList');
        if (!scriptsList) return;
        
        const scripts = this.data.creative_tab.scripts || [];
        scriptsList.innerHTML = '';
        
        scripts.forEach(script => {
            const scriptElement = this.createScriptElement(script);
            scriptsList.appendChild(scriptElement);
        });
    }
    
    createScriptElement(script) {
        const scriptDiv = document.createElement('div');
        scriptDiv.className = 'script-item';
        
        scriptDiv.innerHTML = `
            <div class="item-title">
                ${script.title}
                <div class="item-actions">
                    <button onclick="app.editScript(${script.id})" title="Edit">✏️</button>
                    <button onclick="app.deleteScript(${script.id})" title="Delete">🗑️</button>
                </div>
            </div>
            <div class="item-meta">
                <span class="status-badge status-${script.status.toLowerCase()}">${script.status}</span>
                <span>${script.type}</span>
                <span>Pages: ${script.pages}/${script.target_pages}</span>
            </div>
        `;
        
        return scriptDiv;
    }
    
    renderCharacters() {
        const charactersList = document.getElementById('charactersList');
        if (!charactersList) return;
        
        const characters = this.data.creative_tab.characters || [];
        charactersList.innerHTML = '';
        
        characters.forEach(character => {
            const characterElement = this.createCharacterElement(character);
            charactersList.appendChild(characterElement);
        });
    }
    
    createCharacterElement(character) {
        const characterDiv = document.createElement('div');
        characterDiv.className = 'character-item';
        
        characterDiv.innerHTML = `
            <div class="item-title">
                ${character.name}
                <div class="item-actions">
                    <button onclick="app.editCharacter(${character.id})" title="Edit">✏️</button>
                    <button onclick="app.deleteCharacter(${character.id})" title="Delete">🗑️</button>
                </div>
            </div>
            <div class="item-meta">
                <span>Age: ${character.age}</span>
                <span>${character.occupation}</span>
            </div>
            <div class="item-description">${character.description}</div>
        `;
        
        return characterDiv;
    }
    
    showAddCharacterModal() {
        const modal = this.createModal('Add Character', `
            <div class="form-group">
                <label for="characterName">Name:</label>
                <input type="text" id="characterName" class="form-control" required>
            </div>
            <div class="form-group">
                <label for="characterAge">Age:</label>
                <input type="number" id="characterAge" class="form-control" required>
            </div>
            <div class="form-group">
                <label for="characterOccupation">Occupation:</label>
                <input type="text" id="characterOccupation" class="form-control" required>
            </div>
            <div class="form-group">
                <label for="characterDescription">Description:</label>
                <textarea id="characterDescription" class="form-control" rows="3" required></textarea>
            </div>
        `);
        
        const saveBtn = modal.querySelector('.btn--primary');
        saveBtn.onclick = () => {
            const name = document.getElementById('characterName').value;
            const age = parseInt(document.getElementById('characterAge').value);
            const occupation = document.getElementById('characterOccupation').value;
            const description = document.getElementById('characterDescription').value;
            
            if (name && age && occupation && description) {
                this.addCharacter(name, age, occupation, description);
                this.closeModal(modal);
            }
        };
    }
    
    addCharacter(name, age, occupation, description) {
        const newCharacter = {
            id: Date.now(),
            name: name,
            age: age,
            occupation: occupation,
            description: description,
            story_ids: []
        };
        
        this.data.creative_tab.characters.push(newCharacter);
        this.renderCharacters();
        this.saveData();
        this.showNotification('Character added successfully', 'success');
    }
    
    deleteCharacter(characterId) {
        const characterIndex = this.data.creative_tab.characters.findIndex(c => c.id === characterId);
        if (characterIndex > -1) {
            const character = this.data.creative_tab.characters.splice(characterIndex, 1)[0];
            character.deleted_at = new Date().toISOString();
            this.data.trash.characters.push(character);
            this.renderCharacters();
            this.updateTrashCount();
            this.saveData();
            this.showNotification('Character moved to trash', 'info');
        }
    }
    
    renderLocations() {
        const locationsList = document.getElementById('locationsList');
        if (!locationsList) return;
        
        const locations = this.data.creative_tab.locations || [];
        locationsList.innerHTML = '';
        
        locations.forEach(location => {
            const locationElement = this.createLocationElement(location);
            locationsList.appendChild(locationElement);
        });
    }
    
    createLocationElement(location) {
        const locationDiv = document.createElement('div');
        locationDiv.className = 'location-item';
        
        locationDiv.innerHTML = `
            <div class="item-title">
                ${location.name}
                <div class="item-actions">
                    <button onclick="app.editLocation(${location.id})" title="Edit">✏️</button>
                    <button onclick="app.deleteLocation(${location.id})" title="Delete">🗑️</button>
                </div>
            </div>
            <div class="item-meta">
                <span>${location.type}</span>
                <span>${location.cost || 'Cost TBD'}</span>
            </div>
            <div class="item-description">${location.description}</div>
        `;
        
        return locationDiv;
    }
    
    showAddLocationModal() {
        const modal = this.createModal('Add Location', `
            <div class="form-group">
                <label for="locationName">Name:</label>
                <input type="text" id="locationName" class="form-control" required>
            </div>
            <div class="form-group">
                <label for="locationType">Type:</label>
                <select id="locationType" class="form-control">
                    <option value="Interior">Interior</option>
                    <option value="Exterior">Exterior</option>
                    <option value="Interior/Exterior">Interior/Exterior</option>
                </select>
            </div>
            <div class="form-group">
                <label for="locationDescription">Description:</label>
                <textarea id="locationDescription" class="form-control" rows="3" required></textarea>
            </div>
            <div class="form-group">
                <label for="locationCost">Cost:</label>
                <input type="text" id="locationCost" class="form-control" placeholder="e.g., ₹5,000/day">
            </div>
        `);
        
        const saveBtn = modal.querySelector('.btn--primary');
        saveBtn.onclick = () => {
            const name = document.getElementById('locationName').value;
            const type = document.getElementById('locationType').value;
            const description = document.getElementById('locationDescription').value;
            const cost = document.getElementById('locationCost').value;
            
            if (name && description) {
                this.addLocation(name, type, description, cost);
                this.closeModal(modal);
            }
        };
    }
    
    addLocation(name, type, description, cost) {
        const newLocation = {
            id: Date.now(),
            name: name,
            type: type,
            description: description,
            cost: cost,
            story_ids: []
        };
        
        this.data.creative_tab.locations.push(newLocation);
        this.renderLocations();
        this.saveData();
        this.showNotification('Location added successfully', 'success');
    }
    
    deleteLocation(locationId) {
        const locationIndex = this.data.creative_tab.locations.findIndex(l => l.id === locationId);
        if (locationIndex > -1) {
            const location = this.data.creative_tab.locations.splice(locationIndex, 1)[0];
            location.deleted_at = new Date().toISOString();
            this.data.trash.locations.push(location);
            this.renderLocations();
            this.updateTrashCount();
            this.saveData();
            this.showNotification('Location moved to trash', 'info');
        }
    }
    
    // ==================== MEDIA SUPPORT ====================
    
    initializeMediaSupport() {
        // Initialize speech recognition if supported
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            this.recognition = new SpeechRecognition();
            this.recognition.continuous = false;
            this.recognition.interimResults = false;
            this.recognition.lang = 'en-US';
            
            this.recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                this.handleVoiceResult(transcript);
            };
            
            this.recognition.onerror = (event) => {
                console.error('Speech recognition error:', event.error);
                this.showNotification('Speech recognition error', 'error');
            };
        }
    }
    
    startVoiceNote() {
        if (this.recognition) {
            this.recognition.start();
            this.showNotification('Listening... Speak now', 'info');
        } else {
            this.showNotification('Speech recognition not supported', 'error');
        }
    }
    
    handleVoiceResult(transcript) {
        // Add the voice note directly
        this.addNote(transcript, 'voice_note');
        this.showNotification('Voice note added successfully', 'success');
    }
    
    toggleAudioRecording() {
        if (this.isRecording) {
            this.stopRecording();
        } else {
            this.startRecording();
        }
    }
    
    startRecording() {
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
                this.mediaRecorder = new MediaRecorder(stream);
                this.audioChunks = [];
                
                this.mediaRecorder.ondataavailable = (event) => {
                    this.audioChunks.push(event.data);
                };
                
                this.mediaRecorder.onstop = () => {
                    const audioBlob = new Blob(this.audioChunks, { type: 'audio/wav' });
                    this.saveAudioRecording(audioBlob);
                };
                
                this.mediaRecorder.start();
                this.isRecording = true;
                
                const recordBtn = document.getElementById('recordAudioBtn');
                if (recordBtn) {
                    recordBtn.textContent = '⏹️ Stop';
                    recordBtn.classList.add('recording');
                }
                
                const recordingStatus = document.getElementById('recordingStatus');
                if (recordingStatus) {
                    recordingStatus.classList.remove('hidden');
                }
                
                this.showNotification('Recording started...', 'info');
            })
            .catch(error => {
                console.error('Error accessing microphone:', error);
                this.showNotification('Error accessing microphone', 'error');
            });
    }
    
    stopRecording() {
        if (this.mediaRecorder && this.isRecording) {
            this.mediaRecorder.stop();
            this.isRecording = false;
            
            const recordBtn = document.getElementById('recordAudioBtn');
            if (recordBtn) {
                recordBtn.textContent = '🔴 Record';
                recordBtn.classList.remove('recording');
            }
            
            const recordingStatus = document.getElementById('recordingStatus');
            if (recordingStatus) {
                recordingStatus.classList.add('hidden');
            }
            
            this.showNotification('Recording stopped and saved', 'success');
        }
    }
    
    saveAudioRecording(audioBlob) {
        const reader = new FileReader();
        reader.onload = (event) => {
            const audioData = event.target.result;
            const newRecording = {
                id: Date.now(),
                name: `Recording ${new Date().toLocaleString()}`,
                data: audioData,
                size: audioBlob.size,
                created: new Date().toISOString(),
                duration: 0 // Would need additional code to calculate actual duration
            };
            
            this.data.audio.recordings.push(newRecording);
            this.data.audio.total_duration += newRecording.duration;
            
            this.saveData();
            this.renderAudioRecordings();
        };
        reader.readAsDataURL(audioBlob);
    }
    
    renderAudioRecordings() {
        const audioList = document.getElementById('audioRecordingsList');
        if (!audioList) return;
        
        const recordings = this.data.audio.recordings || [];
        audioList.innerHTML = '';
        
        recordings.forEach(recording => {
            const recordingDiv = document.createElement('div');
            recordingDiv.className = 'audio-item';
            
            recordingDiv.innerHTML = `
                <div class="audio-info">
                    <div class="audio-name">${recording.name}</div>
                    <div class="audio-meta">
                        <span>${(recording.size / 1024).toFixed(1)} KB</span>
                        <span>${new Date(recording.created).toLocaleDateString()}</span>
                    </div>
                </div>
                <div class="audio-actions">
                    <button onclick="app.playAudio(${recording.id})" title="Play">▶️</button>
                    <button onclick="app.deleteAudioRecording(${recording.id})" title="Delete">🗑️</button>
                </div>
            `;
            
            audioList.appendChild(recordingDiv);
        });
    }
    
    playAudio(recordingId) {
        const recording = this.data.audio.recordings.find(r => r.id === recordingId);
        if (recording) {
            const audio = new Audio(recording.data);
            audio.play();
        }
    }
    
    deleteAudioRecording(recordingId) {
        const recordingIndex = this.data.audio.recordings.findIndex(r => r.id === recordingId);
        if (recordingIndex > -1) {
            const recording = this.data.audio.recordings.splice(recordingIndex, 1)[0];
            recording.deleted_at = new Date().toISOString();
            this.data.trash.audio_recordings = this.data.trash.audio_recordings || [];
            this.data.trash.audio_recordings.push(recording);
            
            this.renderAudioRecordings();
            this.updateTrashCount();
            this.saveData();
            this.showNotification('Recording moved to trash', 'info');
        }
    }
    
    // ==================== FILE MANAGEMENT ====================
    
    showFileUpload() {
        const input = document.createElement('input');
        input.type = 'file';
        input.multiple = true;
        input.accept = 'image/*,audio/*,video/*,.pdf,.txt,.doc,.docx';
        
        input.onchange = (event) => {
            const files = Array.from(event.target.files);
            files.forEach(file => this.uploadFile(file));
        };
        
        input.click();
    }
    
    uploadFile(file) {
        if (file.size > 10 * 1024 * 1024) { // 10MB limit for demo
            this.showNotification('File too large (max 10MB)', 'error');
            return;
        }
        
        const reader = new FileReader();
        reader.onload = (event) => {
            const fileData = {
                id: Date.now() + Math.random(),
                name: file.name,
                type: file.type,
                size: file.size,
                data: event.target.result,
                uploaded: new Date().toISOString()
            };
            
            this.data.files.uploaded_files.push(fileData);
            this.data.files.storage_used += file.size;
            
            this.saveData();
            this.renderFiles();
            this.showNotification('File uploaded successfully', 'success');
        };
        
        reader.readAsDataURL(file);
    }
    
    renderFiles() {
        const filesList = document.getElementById('filesList');
        if (!filesList) return;
        
        const files = this.data.files.uploaded_files || [];
        filesList.innerHTML = '';
        
        files.forEach(file => {
            const fileDiv = document.createElement('div');
            fileDiv.className = 'file-item';
            
            const fileIcon = this.getFileIcon(file.type);
            
            fileDiv.innerHTML = `
                <div class="file-info">
                    <div class="file-icon">${fileIcon}</div>
                    <div class="file-details">
                        <div class="file-name">${file.name}</div>
                        <div class="file-meta">
                            <span>${(file.size / 1024).toFixed(1)} KB</span>
                            <span>${new Date(file.uploaded).toLocaleDateString()}</span>
                        </div>
                    </div>
                </div>
                <div class="file-actions">
                    <button onclick="app.downloadFile(${file.id})" title="Download">⬇️</button>
                    <button onclick="app.deleteFile(${file.id})" title="Delete">🗑️</button>
                </div>
            `;
            
            filesList.appendChild(fileDiv);
        });
    }
    
    getFileIcon(fileType) {
        if (fileType.startsWith('image/')) return '🖼️';
        if (fileType.startsWith('audio/')) return '🎵';
        if (fileType.startsWith('video/')) return '🎥';
        if (fileType.includes('pdf')) return '📄';
        if (fileType.includes('text')) return '📝';
        return '📁';
    }
    
    downloadFile(fileId) {
        const file = this.data.files.uploaded_files.find(f => f.id === fileId);
        if (file) {
            const link = document.createElement('a');
            link.href = file.data;
            link.download = file.name;
            link.click();
        }
    }
    
    deleteFile(fileId) {
        const fileIndex = this.data.files.uploaded_files.findIndex(f => f.id === fileId);
        if (fileIndex > -1) {
            const file = this.data.files.uploaded_files.splice(fileIndex, 1)[0];
            file.deleted_at = new Date().toISOString();
            this.data.trash.files = this.data.trash.files || [];
            this.data.trash.files.push(file);
            
            this.data.files.storage_used -= file.size;
            
            this.renderFiles();
            this.updateTrashCount();
            this.saveData();
            this.showNotification('File moved to trash', 'info');
        }
    }
    
    // ==================== TRASH MANAGEMENT ====================
    
    updateTrashCount() {
        const trashCount = document.getElementById('trashCount');
        if (!trashCount) return;
        
        const totalTrashItems = Object.values(this.data.trash).reduce((sum, arr) => sum + (arr?.length || 0), 0);
        
        if (totalTrashItems > 0) {
            trashCount.textContent = totalTrashItems;
            trashCount.classList.remove('hidden');
        } else {
            trashCount.classList.add('hidden');
        }
    }
    
    showTrashModal() {
        const trashHtml = `
            <div class="trash-sections">
                ${this.renderTrashSection('Tasks', this.data.trash.tasks)}
                ${this.renderTrashSection('Notes', this.data.trash.notes)}
                ${this.renderTrashSection('Stories', this.data.trash.stories)}
                ${this.renderTrashSection('Characters', this.data.trash.characters)}
                ${this.renderTrashSection('Locations', this.data.trash.locations)}
                ${this.renderTrashSection('Expenses', this.data.trash.expenses)}
                ${this.renderTrashSection('Files', this.data.trash.files)}
                ${this.renderTrashSection('Audio Recordings', this.data.trash.audio_recordings || [])}
            </div>
            <div class="trash-actions">
                <button class="btn btn--danger" onclick="app.emptyTrash()">Empty Trash</button>
            </div>
        `;
        
        this.createModal('Trash', trashHtml, 'large');
    }
    
    renderTrashSection(title, items) {
        if (!items || items.length === 0) return '';
        
        const itemsHtml = items.map(item => `
            <div class="trash-item">
                <div class="trash-item-info">
                    <div class="trash-item-title">${item.title || item.name || item.content || 'Untitled'}</div>
                    <div class="trash-item-meta">
                        Deleted: ${new Date(item.deleted_at).toLocaleDateString()}
                    </div>
                </div>
                <div class="trash-item-actions">
                    <button onclick="app.restoreItem('${title.toLowerCase()}', ${item.id})" class="btn btn--sm btn--primary">Restore</button>
                    <button onclick="app.permanentlyDeleteItem('${title.toLowerCase()}', ${item.id})" class="btn btn--sm btn--danger">Delete Forever</button>
                </div>
            </div>
        `).join('');
        
        return `
            <div class="trash-section">
                <h4>${title} (${items.length})</h4>
                <div class="trash-items">
                    ${itemsHtml}
                </div>
            </div>
        `;
    }
    
    restoreItem(type, itemId) {
        const trashKey = type === 'stories' ? 'stories' : type === 'audio recordings' ? 'audio_recordings' : type;
        const trashArray = this.data.trash[trashKey];
        
        if (trashArray) {
            const itemIndex = trashArray.findIndex(item => item.id === itemId);
            if (itemIndex > -1) {
                const item = trashArray.splice(itemIndex, 1)[0];
                delete item.deleted_at;
                
                // Restore to original location
                switch (type) {
                    case 'tasks':
                        this.data.home_tab.tasks.push(item);
                        this.renderTasks();
                        break;
                    case 'notes':
                        this.data.home_tab.quick_notes.push(item);
                        this.renderNotes();
                        break;
                    case 'stories':
                        this.data.creative_tab.story_ideas.push(item);
                        this.renderStories();
                        break;
                    case 'characters':
                        this.data.creative_tab.characters.push(item);
                        this.renderCharacters();
                        break;
                    case 'locations':
                        this.data.creative_tab.locations.push(item);
                        this.renderLocations();
                        break;
                    case 'expenses':
                        const currentMonth = this.data.home_tab.finance.current_month;
                        if (!this.data.home_tab.finance.expenses_by_month[currentMonth]) {
                            this.data.home_tab.finance.expenses_by_month[currentMonth] = [];
                        }
                        this.data.home_tab.finance.expenses_by_month[currentMonth].push(item);
                        this.renderFinanceWidget();
                        break;
                    case 'files':
                        this.data.files.uploaded_files.push(item);
                        this.renderFiles();
                        break;
                    case 'audio recordings':
                        this.data.audio.recordings.push(item);
                        this.renderAudioRecordings();
                        break;
                }
                
                this.updateTrashCount();
                this.saveData();
                this.showNotification('Item restored successfully', 'success');
                
                // Close and reopen trash modal to refresh
                this.closeModal();
                setTimeout(() => this.showTrashModal(), 100);
            }
        }
    }
    
    permanentlyDeleteItem(type, itemId) {
        if (confirm('Are you sure you want to permanently delete this item? This action cannot be undone.')) {
            const trashKey = type === 'stories' ? 'stories' : type === 'audio recordings' ? 'audio_recordings' : type;
            const trashArray = this.data.trash[trashKey];
            
            if (trashArray) {
                const itemIndex = trashArray.findIndex(item => item.id === itemId);
                if (itemIndex > -1) {
                    trashArray.splice(itemIndex, 1);
                    this.updateTrashCount();
                    this.saveData();
                    this.showNotification('Item permanently deleted', 'info');
                    
                    // Refresh trash modal
                    this.closeModal();
                    setTimeout(() => this.showTrashModal(), 100);
                }
            }
        }
    }
    
    emptyTrash() {
        if (confirm('Are you sure you want to permanently delete all items in trash? This action cannot be undone.')) {
            this.data.trash = {
                characters: [],
                locations: [],
                stories: [],
                scripts: [],
                tasks: [],
                notes: [],
                expenses: [],
                files: [],
                audio_recordings: []
            };
            
            this.updateTrashCount();
            this.saveData();
            this.showNotification('Trash emptied successfully', 'success');
            this.closeModal();
        }
    }
    
    // ==================== UTILITY FUNCTIONS ====================
    
    toggleTheme() {
        document.body.classList.toggle('light-theme');
        const isDark = !document.body.classList.contains('light-theme');
        
        this.data.settings.theme = isDark ? 'dark' : 'light';
        
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.innerHTML = `${isDark ? '🌙' : '☀️'} Theme`;
        }
        
        this.saveData();
    }
    
    updateTime() {
        const now = new Date();
        const timeStr = now.toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: false 
        });
        const dateStr = now.toLocaleDateString('en-US', { 
            weekday: 'short',
            month: 'short', 
            day: 'numeric',
            year: 'numeric'
        });
        
        const timeElement = document.getElementById('currentTime');
        const dateElement = document.getElementById('currentDate');
        
        if (timeElement) timeElement.textContent = timeStr;
        if (dateElement) dateElement.textContent = dateStr;
        
        // Update every minute
        setTimeout(() => this.updateTime(), 60000);
    }
    
    createModal(title, content, size = 'medium') {
        const modalHtml = `
            <div class="modal-overlay" onclick="app.closeModal(this)">
                <div class="modal modal--${size}" onclick="event.stopPropagation()">
                    <div class="modal-header">
                        <h3>${title}</h3>
                        <button class="modal-close" onclick="app.closeModal(this.closest('.modal-overlay'))">&times;</button>
                    </div>
                    <div class="modal-body">
                        ${content}
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn--outline" onclick="app.closeModal(this.closest('.modal-overlay'))">Cancel</button>
                        <button class="btn btn--primary">Save</button>
                    </div>
                </div>
            </div>
        `;
        
        const modalContainer = document.getElementById('modalContainer') || document.body;
        modalContainer.insertAdjacentHTML('beforeend', modalHtml);
        
        return modalContainer.lastElementChild;
    }
    
    closeModal(modal) {
        if (!modal) {
            modal = document.querySelector('.modal-overlay');
        }
        if (modal) {
            modal.remove();
        }
    }
    
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification--${type}`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
    
    showSaveIndicator() {
        // Visual indicator that data has been saved
        const indicator = document.createElement('div');
        indicator.className = 'save-indicator';
        indicator.textContent = 'Saved ✓';
        document.body.appendChild(indicator);
        
        setTimeout(() => {
            indicator.classList.add('show');
            setTimeout(() => {
                indicator.classList.remove('show');
                setTimeout(() => indicator.remove(), 300);
            }, 1000);
        }, 100);
    }
    
    startAutoSave() {
        this.autoSaveTimer = setInterval(() => {
            this.saveData();
        }, (this.data.settings.auto_save_interval || 30) * 1000);
    }
    
    getRelativeTime(date) {
        const now = new Date();
        const diffMs = now - date;
        const diffMins = Math.floor(diffMs / (1000 * 60));
        const diffHours = Math.floor(diffMins / 60);
        const diffDays = Math.floor(diffHours / 24);
        
        if (diffMins < 1) return 'Just now';
        if (diffMins < 60) return `${diffMins} minutes ago`;
        if (diffHours < 24) return `${diffHours} hours ago`;
        return `${diffDays} days ago`;
    }
    
    exportData() {
        const dataStr = JSON.stringify(this.data, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        
        const link = document.createElement('a');
        link.href = URL.createObjectURL(dataBlob);
        link.download = `creative-dashboard-backup-${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        
        this.showNotification('Data exported successfully', 'success');
    }
    
    clearAllData() {
        if (confirm('Are you sure you want to clear all data? This will delete everything including trash. This action cannot be undone.')) {
            localStorage.removeItem('creativeDashboard');
            location.reload();
        }
    }
    
    // Placeholder functions for features that would need more complex implementation
    editTask(taskId) { this.showNotification('Edit functionality coming soon', 'info'); }
    editNote(noteId) { this.showNotification('Edit functionality coming soon', 'info'); }
    editExpense(expenseId) { this.showNotification('Edit functionality coming soon', 'info'); }
    editStory(storyId) { this.showNotification('Edit functionality coming soon', 'info'); }
    editScript(scriptId) { this.showNotification('Edit functionality coming soon', 'info'); }
    editCharacter(characterId) { this.showNotification('Edit functionality coming soon', 'info'); }
    editLocation(locationId) { this.showNotification('Edit functionality coming soon', 'info'); }
    deleteScript(scriptId) { this.showNotification('Delete functionality coming soon', 'info'); }
    showAddScriptModal() { this.showNotification('Add script functionality coming soon', 'info'); }
}

// Additional CSS for modals and notifications
const additionalCSS = `
<style>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.modal {
    background: var(--color-bg-secondary);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg);
    max-height: 90vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

.modal--medium {
    width: 90%;
    max-width: 500px;
}

.modal--large {
    width: 90%;
    max-width: 800px;
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--spacing-lg);
    border-bottom: 1px solid var(--color-border);
}

.modal-header h3 {
    margin: 0;
}

.modal-close {
    background: none;
    border: none;
    font-size: 1.5rem;
    color: var(--color-text-secondary);
    cursor: pointer;
}

.modal-body {
    padding: var(--spacing-lg);
    overflow-y: auto;
    flex: 1;
}

.modal-footer {
    display: flex;
    justify-content: flex-end;
    gap: var(--spacing-sm);
    padding: var(--spacing-lg);
    border-top: 1px solid var(--color-border);
}

.form-group {
    margin-bottom: var(--spacing-md);
}

.form-group label {
    display: block;
    margin-bottom: var(--spacing-xs);
    font-weight: 500;
}

.form-control {
    width: 100%;
    padding: var(--spacing-sm);
    background: var(--color-bg-tertiary);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-sm);
    color: var(--color-text-primary);
    font-size: 0.875rem;
}

.form-control:focus {
    outline: none;
    border-color: var(--color-primary);
}

.notification {
    position: fixed;
    top: 20px;
    right: 20px;
    padding: var(--spacing-md);
    border-radius: var(--radius-md);
    color: white;
    font-weight: 500;
    z-index: 1001;
    transform: translateX(400px);
    transition: var(--transition-base);
}

.notification.show {
    transform: translateX(0);
}

.notification--info {
    background: var(--color-primary);
}

.notification--success {
    background: var(--color-success);
}

.notification--error {
    background: var(--color-error);
}

.save-indicator {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: var(--color-success);
    color: white;
    padding: var(--spacing-sm) var(--spacing-md);
    border-radius: var(--radius-md);
    font-size: 0.875rem;
    transform: translateY(100px);
    transition: var(--transition-base);
    z-index: 1001;
}

.save-indicator.show {
    transform: translateY(0);
}

.trash-sections {
    max-height: 400px;
    overflow-y: auto;
}

.trash-section {
    margin-bottom: var(--spacing-lg);
}

.trash-section h4 {
    margin-bottom: var(--spacing-sm);
    color: var(--color-text-secondary);
}

.trash-items {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
}

.trash-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--spacing-sm);
    background: var(--color-bg-tertiary);
    border-radius: var(--radius-sm);
}

.trash-item-info {
    flex: 1;
}

.trash-item-title {
    font-weight: 500;
    margin-bottom: var(--spacing-xs);
}

.trash-item-meta {
    font-size: 0.75rem;
    color: var(--color-text-secondary);
}

.trash-item-actions {
    display: flex;
    gap: var(--spacing-xs);
}

.trash-actions {
    margin-top: var(--spacing-lg);
    text-align: center;
}

.file-item,
.audio-item,
.expense-item,
.note-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--spacing-sm);
    background: var(--color-bg-tertiary);
    border-radius: var(--radius-sm);
    border: 1px solid var(--color-border);
}

.file-info,
.audio-info,
.expense-content,
.note-content {
    flex: 1;
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
}

.file-details,
.audio-name,
.expense-description,
.note-text {
    font-weight: 500;
}

.file-meta,
.audio-meta,
.expense-meta,
.note-meta {
    font-size: 0.75rem;
    color: var(--color-text-secondary);
    margin-top: var(--spacing-xs);
}

.file-actions,
.audio-actions,
.expense-actions,
.note-actions {
    display: flex;
    gap: var(--spacing-xs);
}

.file-actions button,
.audio-actions button,
.expense-actions button,
.note-actions button {
    padding: var(--spacing-xs);
    background: none;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-sm);
    cursor: pointer;
    color: var(--color-text-secondary);
    transition: var(--transition-base);
}

.file-actions button:hover,
.audio-actions button:hover,
.expense-actions button:hover,
.note-actions button:hover {
    background: var(--color-bg-primary);
    color: var(--color-text-primary);
}

.badge.hidden {
    display: none;
}

@media (max-width: 768px) {
    .modal {
        width: 95%;
        max-width: none;
        margin: var(--spacing-md);
        max-height: calc(100vh - 2rem);
    }
    
    .notification {
        right: 10px;
        left: 10px;
        transform: translateY(-100px);
    }
    
    .notification.show {
        transform: translateY(0);
    }
}
</style>
`;

// Inject additional CSS
document.head.insertAdjacentHTML('beforeend', additionalCSS);

// Initialize the application
const app = new CreativeDashboard();
