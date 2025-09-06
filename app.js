// Application data using the provided JSON structure
const appData = {
  "user": {
    "name": "User",
    "location": "Bangalore, India",
    "timezone": "Asia/Kolkata"
  },
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
      "advice": "Air quality is acceptable for most people. However, sensitive individuals may experience minor issues."
    },
    "tasks": [
      {"id": 1, "title": "Research narrative structure for first script", "category": "Creative", "priority": "High", "due": "Today", "completed": false},
      {"id": 2, "title": "Schedule health checkup", "category": "Health", "priority": "Medium", "due": "This week", "completed": false},
      {"id": 3, "title": "Complete project milestone", "category": "Work", "priority": "High", "due": "Tomorrow", "completed": false},
      {"id": 4, "title": "Buy groceries", "category": "Personal", "priority": "Low", "due": "Weekend", "completed": true},
      {"id": 5, "title": "Read screenplay format guide", "category": "Learning", "priority": "Medium", "due": "Next week", "completed": false}
    ],
    "quick_notes": [
      {"id": 1, "content": "Story idea: Time-traveling cinematographer", "timestamp": "2 hours ago"},
      {"id": 2, "content": "Character concept: Ambitious director from small town", "timestamp": "1 day ago"},
      {"id": 3, "content": "Research film festivals in India for future submissions", "timestamp": "3 days ago"}
    ],
    "finance": {
      "monthly_budget": 50000,
      "spent_this_month": 32500,
      "categories": [
        {"name": "Food & Dining", "budget": 8000, "spent": 6200},
        {"name": "Transportation", "budget": 5000, "spent": 4100},
        {"name": "Entertainment", "budget": 3000, "spent": 2800},
        {"name": "Health", "budget": 2000, "spent": 1200},
        {"name": "Creative Equipment", "budget": 8000, "spent": 3500},
        {"name": "Utilities", "budget": 3000, "spent": 2900}
      ]
    },
    "health": {
      "daily_steps": 7500,
      "daily_goal": 10000,
      "water_intake": 6,
      "water_goal": 8,
      "sleep_hours": 6.5,
      "recommended_sleep": 8,
      "weekly_stats": [
        {"day": "Mon", "steps": 8200},
        {"day": "Tue", "steps": 7800},
        {"day": "Wed", "steps": 9100},
        {"day": "Thu", "steps": 6900},
        {"day": "Fri", "steps": 7500},
        {"day": "Sat", "steps": 8800},
        {"day": "Sun", "steps": 7200}
      ]
    }
  },
  "creative_tab": {
    "story_ideas": [
      {"id": 1, "title": "The Digital Nomad's Dilemma", "genre": "Drama/Thriller", "logline": "A tech professional discovers their remote work is being used to manipulate global markets", "status": "Concept", "created": "2024-09-01", "notes": "Explore themes of modern work culture and ethical responsibility"},
      {"id": 2, "title": "Bangalore Traffic Symphony", "genre": "Comedy/Musical", "logline": "A frustrated commuter imagines the city's traffic as an elaborate musical performance", "status": "Treatment", "created": "2024-08-28", "notes": "Could be a short film with musical elements showcasing Bangalore's unique character"},
      {"id": 3, "title": "The Last Film Projector", "genre": "Drama/Historical", "logline": "An aging projectionist fights to save the last single-screen cinema in his neighborhood", "status": "Outline", "created": "2024-08-25", "notes": "Based on real cinema closures in Indian cities"}
    ],
    "scripts": [
      {"id": 1, "title": "The Digital Nomad's Dilemma - Draft 1", "type": "Feature Screenplay", "pages": 0, "target_pages": 110, "status": "Planning", "last_modified": "2024-09-06", "word_count": 0, "scenes": 0},
      {"id": 2, "title": "Bangalore Traffic Symphony - Short", "type": "Short Film Script", "pages": 8, "target_pages": 10, "status": "First Draft", "last_modified": "2024-09-05", "word_count": 1200, "scenes": 12}
    ],
    "projects": [
      {"id": 1, "title": "Bangalore Traffic Symphony", "type": "Short Film", "status": "Pre-Production", "progress": 35, "deadline": "2024-12-15", "budget": 50000, "spent": 12000, "tasks": [{"task": "Location scouting", "status": "Completed", "assignee": "Self"}, {"task": "Cast local musicians", "status": "In Progress", "assignee": "Self"}, {"task": "Equipment rental research", "status": "Pending", "assignee": "Self"}, {"task": "Shot list creation", "status": "In Progress", "assignee": "Self"}]},
      {"id": 2, "title": "The Last Film Projector", "type": "Feature Film", "status": "Development", "progress": 15, "deadline": "2025-06-01", "budget": 2000000, "spent": 25000, "tasks": [{"task": "Research old cinemas", "status": "In Progress", "assignee": "Self"}, {"task": "Interview projectionist", "status": "Pending", "assignee": "Self"}, {"task": "Script development", "status": "Pending", "assignee": "Self"}]}
    ],
    "characters": [
      {"id": 1, "name": "Arjun Sharma", "project": "The Digital Nomad's Dilemma", "age": 29, "occupation": "Software Developer", "description": "Ambitious tech professional who discovers his code is being misused", "backstory": "From middle-class Bangalore family, worked hard to get into tech", "traits": ["Ethical", "Curious", "Introverted", "Detail-oriented"]},
      {"id": 2, "name": "Ravi Kumar", "project": "The Last Film Projector", "age": 65, "occupation": "Cinema Projectionist", "description": "Veteran projectionist with 40 years of experience", "backstory": "Started as teenager, witnessed the golden age of Indian cinema", "traits": ["Passionate", "Traditional", "Stubborn", "Wise"]}
    ],
    "locations": [
      {"id": 1, "name": "Tech Park Office", "project": "The Digital Nomad's Dilemma", "type": "Interior", "description": "Modern open-plan office in Electronic City", "availability": "Weekends only", "cost": "₹5,000/day", "notes": "Need permission from management"},
      {"id": 2, "name": "Old Single Screen Cinema", "project": "The Last Film Projector", "type": "Interior/Exterior", "description": "Vintage cinema hall in central Bangalore", "availability": "Flexible", "cost": "₹15,000/day", "notes": "Perfect authentic location, owner is supportive"}
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
      "scripts_completed": 0
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
    "language": "en"
  }
};

// Application state
let currentTab = 'home';
let currentTheme = appData.settings.theme;
let currentTaskFilter = 'all';
let nextTaskId = 6;
let nextNoteId = 4;
let nextStoryId = 4;
let nextScriptId = 3;
let nextProjectId = 3;
let nextCharacterId = 3;
let nextLocationId = 3;

// Icon mappings
const iconMap = {
  'Partly Cloudy': '⛅',
  'Light Rain': '🌧️',
  'Cloudy': '☁️',
  'Sunny': '☀️'
};

// Utility functions
function formatTime(date) {
  return date.toLocaleTimeString('en-IN', {
    timeZone: 'Asia/Kolkata',
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
}

function formatDate(date) {
  return date.toLocaleDateString('en-IN', {
    timeZone: 'Asia/Kolkata',
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

function formatCurrency(amount) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
}

// Tab Management
function switchTab(tabName) {
  if (currentTab === tabName) return;
  
  // Hide all tab panels
  document.querySelectorAll('.tab-panel').forEach(panel => {
    panel.classList.remove('active');
  });
  
  // Remove active class from all tab buttons
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  
  // Show target tab panel
  const targetPanel = document.getElementById(`${tabName}-tab`);
  const targetButton = document.querySelector(`[data-tab="${tabName}"]`);
  
  if (targetPanel && targetButton) {
    targetPanel.classList.add('active');
    targetButton.classList.add('active');
    currentTab = tabName;
    
    // Render content for the active tab
    if (tabName === 'home') {
      renderHomeTab();
    } else if (tabName === 'creative') {
      renderCreativeTab();
    } else if (tabName === 'settings') {
      renderSettingsTab();
    }
  }
}

// Theme Management
function toggleTheme() {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  appData.settings.theme = currentTheme;
  
  document.documentElement.setAttribute('data-color-scheme', currentTheme);
  
  const themeIcon = document.querySelector('.theme-icon');
  if (themeIcon) {
    themeIcon.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
  }
  
  const themeText = document.getElementById('theme-text');
  if (themeText) {
    themeText.textContent = currentTheme === 'dark' ? 'Dark Mode' : 'Light Mode';
  }
}

// Time and Date Updates
function updateDateTime() {
  const now = new Date();
  const timeElement = document.getElementById('current-time');
  const dateElement = document.getElementById('current-date');
  
  if (timeElement && dateElement) {
    timeElement.textContent = formatTime(now);
    dateElement.textContent = formatDate(now);
  }
}

// Home Tab Rendering
function renderHomeTab() {
  renderWeatherForecast();
  renderTasks();
  renderNotes();
  renderFinanceCategories();
  renderHealthMetrics();
}

function renderWeatherForecast() {
  const forecastContainer = document.getElementById('weather-forecast');
  if (!forecastContainer) return;

  forecastContainer.innerHTML = appData.home_tab.weather.forecast.map(item => `
    <div class="forecast-day">
      <div class="forecast-temp">${item.high}°/${item.low}°</div>
      <div>${item.day}</div>
    </div>
  `).join('');
}

function renderTasks() {
  const container = document.getElementById('task-list');
  if (!container) return;

  let filteredTasks = appData.home_tab.tasks;
  if (currentTaskFilter !== 'all') {
    filteredTasks = appData.home_tab.tasks.filter(task => task.category === currentTaskFilter);
  }

  container.innerHTML = filteredTasks.map(task => `
    <div class="task-item" data-task-id="${task.id}">
      <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''} 
             onchange="toggleTaskComplete(${task.id})">
      <div class="task-content">
        <div class="task-title ${task.completed ? 'completed' : ''}">${task.title}</div>
        <div class="task-meta">
          <span class="task-category">${task.category}</span>
          <span class="task-priority ${task.priority.toLowerCase()}">${task.priority}</span>
          <span class="task-due">${task.due}</span>
        </div>
      </div>
    </div>
  `).join('');
}

function toggleTaskComplete(taskId) {
  const task = appData.home_tab.tasks.find(t => t.id === taskId);
  if (task) {
    task.completed = !task.completed;
    renderTasks();
  }
}

function addNewTask() {
  const titleInput = document.getElementById('new-task-input');
  const categorySelect = document.getElementById('task-category');
  const prioritySelect = document.getElementById('task-priority');

  const title = titleInput.value.trim();
  if (title) {
    const newTask = {
      id: nextTaskId++,
      title: title,
      category: categorySelect.value,
      priority: prioritySelect.value,
      due: 'Today',
      completed: false
    };

    appData.home_tab.tasks.unshift(newTask);
    titleInput.value = '';
    renderTasks();
  }
}

function setTaskFilter(filter) {
  currentTaskFilter = filter;
  
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.filter === filter) {
      btn.classList.add('active');
    }
  });
  
  renderTasks();
}

function renderNotes() {
  const container = document.getElementById('notes-list');
  if (!container) return;

  container.innerHTML = appData.home_tab.quick_notes.map(note => `
    <div class="note-item">
      <button class="note-delete" onclick="deleteNote(${note.id})">×</button>
      <div class="note-content">${note.content}</div>
      <div class="note-timestamp">${note.timestamp}</div>
    </div>
  `).join('');
}

function addNewNote() {
  const textarea = document.getElementById('new-note-input');
  const content = textarea.value.trim();
  
  if (content) {
    const newNote = {
      id: nextNoteId++,
      content: content,
      timestamp: 'Just now'
    };

    appData.home_tab.quick_notes.unshift(newNote);
    textarea.value = '';
    renderNotes();
  }
}

function deleteNote(noteId) {
  const index = appData.home_tab.quick_notes.findIndex(note => note.id === noteId);
  if (index !== -1) {
    appData.home_tab.quick_notes.splice(index, 1);
    renderNotes();
  }
}

function renderFinanceCategories() {
  const container = document.getElementById('finance-categories');
  if (!container) return;

  container.innerHTML = appData.home_tab.finance.categories.map(category => {
    const percentage = (category.spent / category.budget) * 100;
    const progressClass = percentage > 100 ? 'progress-over' : percentage > 90 ? 'progress-close' : 'progress-under';
    
    return `
      <div class="finance-category">
        <div class="category-info">
          <h4>${category.name}</h4>
          <div class="category-amounts">${formatCurrency(category.spent)} / ${formatCurrency(category.budget)}</div>
        </div>
        <div class="category-progress">
          <div class="category-progress-fill ${progressClass}" style="width: ${Math.min(percentage, 100)}%"></div>
        </div>
      </div>
    `;
  }).join('');

  const budgetPercentage = Math.round((appData.home_tab.finance.spent_this_month / appData.home_tab.finance.monthly_budget) * 100);
  const budgetPercentageEl = document.getElementById('budget-percentage');
  if (budgetPercentageEl) {
    budgetPercentageEl.textContent = `${budgetPercentage}%`;
  }
}

function renderHealthMetrics() {
  const waterContainer = document.getElementById('water-glasses');
  if (waterContainer) {
    let waterHtml = '';
    for (let i = 0; i < appData.home_tab.health.water_goal; i++) {
      const filled = i < appData.home_tab.health.water_intake;
      waterHtml += `<span class="water-glass ${filled ? '' : 'empty'}" onclick="toggleWaterGlass(${i})">💧</span>`;
    }
    waterContainer.innerHTML = waterHtml;
  }

  const chartContainer = document.getElementById('weekly-chart');
  if (chartContainer) {
    const maxSteps = Math.max(...appData.home_tab.health.weekly_stats.map(stat => stat.steps));
    
    chartContainer.innerHTML = appData.home_tab.health.weekly_stats.map(stat => {
      const height = (stat.steps / maxSteps) * 100;
      return `
        <div class="chart-bar" style="height: ${height}%">
          <div class="chart-day">${stat.day}</div>
        </div>
      `;
    }).join('');
  }
}

function toggleWaterGlass(index) {
  if (index < appData.home_tab.health.water_intake) {
    appData.home_tab.health.water_intake = index;
  } else {
    appData.home_tab.health.water_intake = index + 1;
  }
  renderHealthMetrics();
}

// Creative Tab Rendering
function renderCreativeTab() {
  updateCreativeStats();
  renderStoryCards();
  renderScripts();
  renderProjects();
  renderCharacters();
  renderLocations();
  renderWritingStats();
}

function updateCreativeStats() {
  const wordsToday = document.getElementById('words-today');
  const currentStreak = document.getElementById('current-streak');
  const activeProjects = document.getElementById('active-projects');
  
  if (wordsToday) wordsToday.textContent = appData.creative_tab.writing_stats.words_today;
  if (currentStreak) currentStreak.textContent = appData.creative_tab.writing_stats.current_streak;
  if (activeProjects) activeProjects.textContent = appData.creative_tab.writing_stats.projects_active;
}

function renderStoryCards() {
  const container = document.getElementById('story-cards');
  if (!container) return;

  container.innerHTML = appData.creative_tab.story_ideas.map(story => `
    <div class="story-card" onclick="viewStoryDetails(${story.id})">
      <div class="story-header">
        <div class="story-title">${story.title}</div>
        <div class="story-status status-${story.status.toLowerCase()}">${story.status}</div>
      </div>
      <div class="story-genre">${story.genre}</div>
      <div class="story-logline">${story.logline}</div>
      <div class="story-meta">Created: ${story.created}</div>
    </div>
  `).join('');
}

function renderScripts() {
  const container = document.getElementById('script-list');
  if (!container) return;

  container.innerHTML = appData.creative_tab.scripts.map(script => {
    const progressPercentage = script.target_pages > 0 ? (script.pages / script.target_pages) * 100 : 0;
    
    return `
      <div class="script-item" onclick="viewScriptDetails(${script.id})">
        <div class="script-header">
          <div class="script-title">${script.title}</div>
          <div class="script-status">${script.status}</div>
        </div>
        <div class="script-progress">
          <div class="script-pages">${script.pages} / ${script.target_pages} pages</div>
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${progressPercentage}%"></div>
          </div>
        </div>
        <div class="script-meta">
          <span>${script.word_count} words</span>
          <span>Modified: ${script.last_modified}</span>
        </div>
      </div>
    `;
  }).join('');
}

function renderProjects() {
  const container = document.getElementById('project-cards');
  if (!container) return;

  container.innerHTML = appData.creative_tab.projects.map(project => `
    <div class="project-card">
      <div class="project-card-header">
        <div class="project-title">${project.title}</div>
        <div class="project-type">${project.type}</div>
      </div>
      <div class="project-card-body">
        <div class="project-progress-label">Progress: ${project.progress}%</div>
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${project.progress}%"></div>
        </div>
        <div class="project-tasks">
          ${project.tasks.map(task => `
            <div class="project-task">
              <span class="task-name">${task.task}</span>
              <span class="task-status status-${task.status.toLowerCase().replace(' ', '-')}">${task.status}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

function renderCharacters() {
  const container = document.getElementById('character-cards');
  if (!container) return;

  container.innerHTML = appData.creative_tab.characters.map(character => `
    <div class="character-card" onclick="viewCharacterDetails(${character.id})">
      <div class="character-avatar">${character.name.charAt(0)}</div>
      <div class="character-name">${character.name}</div>
      <div class="character-age">Age ${character.age}</div>
      <div class="character-project">${character.project}</div>
      <div class="character-description">${character.description}</div>
    </div>
  `).join('');
}

function renderLocations() {
  const container = document.getElementById('location-cards');
  if (!container) return;

  container.innerHTML = appData.creative_tab.locations.map(location => `
    <div class="location-card" onclick="viewLocationDetails(${location.id})">
      <div class="location-image">🏢</div>
      <div class="location-content">
        <div class="location-name">${location.name}</div>
        <div class="location-type">${location.type}</div>
        <div class="location-description">${location.description}</div>
        <div class="location-meta">
          <div>Cost: ${location.cost}</div>
          <div>Availability: ${location.availability}</div>
        </div>
      </div>
    </div>
  `).join('');
}

function renderWritingStats() {
  const dailyProgress = (appData.creative_tab.writing_stats.words_today / appData.creative_tab.writing_stats.daily_goal) * 100;
  const weeklyProgress = (appData.creative_tab.writing_stats.words_this_week / appData.creative_tab.writing_stats.weekly_goal) * 100;
  
  // Update progress bars if they exist
  const dailyProgressBar = document.querySelector('.writing-stats-widget .progress-fill');
  if (dailyProgressBar) {
    dailyProgressBar.style.width = `${Math.min(dailyProgress, 100)}%`;
  }
}

// Settings Tab Rendering
function renderSettingsTab() {
  const themeText = document.getElementById('theme-text');
  const dailyGoal = document.getElementById('daily-goal');
  const reminderTime = document.getElementById('reminder-time');
  const writingReminders = document.getElementById('writing-reminders');
  const autoSave = document.getElementById('auto-save');
  const backupFrequency = document.getElementById('backup-frequency');
  const notifications = document.getElementById('notifications');
  
  if (themeText) themeText.textContent = currentTheme === 'dark' ? 'Dark Mode' : 'Light Mode';
  if (dailyGoal) dailyGoal.value = appData.creative_tab.writing_stats.daily_goal;
  if (reminderTime) reminderTime.value = appData.settings.writing_reminder_time;
  if (writingReminders) writingReminders.checked = appData.settings.writing_reminders;
  if (autoSave) autoSave.checked = appData.settings.auto_save;
  if (backupFrequency) backupFrequency.value = appData.settings.backup_frequency;
  if (notifications) notifications.checked = appData.settings.notifications;
}

// Modal Functions
function showAddStoryModal() {
  const modal = document.getElementById('add-story-modal');
  if (modal) {
    modal.classList.remove('hidden');
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('hidden');
  }
}

function addNewStory() {
  const title = document.getElementById('story-title').value.trim();
  const genre = document.getElementById('story-genre').value;
  const logline = document.getElementById('story-logline').value.trim();
  const notes = document.getElementById('story-notes').value.trim();
  
  if (title && logline) {
    const newStory = {
      id: nextStoryId++,
      title: title,
      genre: genre,
      logline: logline,
      status: 'Concept',
      created: new Date().toISOString().split('T')[0],
      notes: notes
    };
    
    appData.creative_tab.story_ideas.unshift(newStory);
    closeModal('add-story-modal');
    renderStoryCards();
    
    // Clear form
    document.getElementById('story-title').value = '';
    document.getElementById('story-logline').value = '';
    document.getElementById('story-notes').value = '';
  }
}

// Placeholder functions for other modals and details views
function showAddScriptModal() {
  console.log('Add Script modal - to be implemented');
}

function showAddProjectModal() {
  console.log('Add Project modal - to be implemented');
}

function showAddCharacterModal() {
  console.log('Add Character modal - to be implemented');
}

function showAddLocationModal() {
  console.log('Add Location modal - to be implemented');
}

function viewStoryDetails(storyId) {
  console.log('View story details:', storyId);
}

function viewScriptDetails(scriptId) {
  console.log('View script details:', scriptId);
}

function viewCharacterDetails(characterId) {
  console.log('View character details:', characterId);
}

function viewLocationDetails(locationId) {
  console.log('View location details:', locationId);
}

// Event Listeners Setup
function setupEventListeners() {
  // Tab navigation
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      switchTab(btn.dataset.tab);
    });
  });

  // Theme toggle
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', (e) => {
      e.preventDefault();
      toggleTheme();
    });
  }

  // Settings theme toggle
  const themeSettingToggle = document.getElementById('theme-setting-toggle');
  if (themeSettingToggle) {
    themeSettingToggle.addEventListener('click', (e) => {
      e.preventDefault();
      toggleTheme();
    });
  }

  // Task filters
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      setTaskFilter(btn.dataset.filter);
    });
  });

  // Add task
  const addTaskBtn = document.getElementById('add-task-btn');
  const newTaskInput = document.getElementById('new-task-input');
  
  if (addTaskBtn) {
    addTaskBtn.addEventListener('click', (e) => {
      e.preventDefault();
      addNewTask();
    });
  }
  
  if (newTaskInput) {
    newTaskInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        addNewTask();
      }
    });
  }

  // Add note
  const addNoteBtn = document.getElementById('add-note-btn');
  const newNoteInput = document.getElementById('new-note-input');
  
  if (addNoteBtn) {
    addNoteBtn.addEventListener('click', (e) => {
      e.preventDefault();
      addNewNote();
    });
  }
  
  if (newNoteInput) {
    newNoteInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        addNewNote();
      }
    });
  }

  // Settings updates
  const dailyGoal = document.getElementById('daily-goal');
  if (dailyGoal) {
    dailyGoal.addEventListener('change', (e) => {
      appData.creative_tab.writing_stats.daily_goal = parseInt(e.target.value);
    });
  }

  const reminderTime = document.getElementById('reminder-time');
  if (reminderTime) {
    reminderTime.addEventListener('change', (e) => {
      appData.settings.writing_reminder_time = e.target.value;
    });
  }

  // Modal close on background click
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
      e.target.classList.add('hidden');
    }
  });
}

// Global functions for inline event handlers
window.toggleTaskComplete = toggleTaskComplete;
window.deleteNote = deleteNote;
window.toggleWaterGlass = toggleWaterGlass;
window.showAddStoryModal = showAddStoryModal;
window.showAddScriptModal = showAddScriptModal;
window.showAddProjectModal = showAddProjectModal;
window.showAddCharacterModal = showAddCharacterModal;
window.showAddLocationModal = showAddLocationModal;
window.closeModal = closeModal;
window.addNewStory = addNewStory;
window.viewStoryDetails = viewStoryDetails;
window.viewScriptDetails = viewScriptDetails;
window.viewCharacterDetails = viewCharacterDetails;
window.viewLocationDetails = viewLocationDetails;

// Initialize the application
function initApp() {
  console.log('Initializing Creative Dashboard...');
  
  // Set initial theme
  document.documentElement.setAttribute('data-color-scheme', currentTheme);
  
  // Update date and time immediately, then every second
  updateDateTime();
  setInterval(updateDateTime, 1000);
  
  // Setup event listeners
  setupEventListeners();
  
  // Render initial tab content
  renderHomeTab();
  
  console.log('Creative Dashboard initialized successfully');
}

// Start the application when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);