import React, { useState, useEffect, useRef } from 'react';

const ImprovPracticeApp = () => {
  // Word bank with 1000+ words
  const wordBank = {
    nouns: [
      // Simple nouns
      'cat', 'dog', 'house', 'car', 'tree', 'book', 'chair', 'table', 'door', 'window',
      'phone', 'computer', 'pen', 'paper', 'shoe', 'hat', 'bag', 'key', 'clock', 'lamp',
      'mirror', 'camera', 'guitar', 'piano', 'ball', 'game', 'toy', 'flower', 'plant', 'garden',
      'kitchen', 'bedroom', 'bathroom', 'office', 'school', 'hospital', 'store', 'restaurant', 'park', 'beach',
      'mountain', 'river', 'lake', 'forest', 'desert', 'city', 'town', 'village', 'street', 'road',
      'bridge', 'building', 'tower', 'castle', 'church', 'library', 'museum', 'theater', 'cinema', 'stadium',
      'airport', 'train', 'bus', 'bicycle', 'motorcycle', 'truck', 'boat', 'ship', 'airplane', 'helicopter',
      'rocket', 'satellite', 'telescope', 'microscope', 'calculator', 'radio', 'television', 'refrigerator', 'oven', 'microwave',
      'washing machine', 'vacuum', 'toothbrush', 'towel', 'pillow', 'blanket', 'mattress', 'sofa', 'cabinet', 'drawer',
      'shelf', 'frame', 'painting', 'sculpture', 'vase', 'candle', 'bottle', 'glass', 'plate', 'bowl',
      'spoon', 'fork', 'knife', 'napkin', 'menu', 'recipe', 'ingredient', 'soup', 'sandwich', 'pizza',
      'burger', 'salad', 'fruit', 'vegetable', 'meat', 'fish', 'bread', 'cheese', 'milk', 'water',
      'coffee', 'tea', 'juice', 'wine', 'beer', 'cake', 'cookie', 'candy', 'chocolate', 'ice cream',
      // Animals
      'elephant', 'lion', 'tiger', 'bear', 'wolf', 'fox', 'rabbit', 'deer', 'horse', 'cow',
      'pig', 'sheep', 'goat', 'chicken', 'duck', 'goose', 'turkey', 'eagle', 'hawk', 'owl',
      'parrot', 'penguin', 'flamingo', 'peacock', 'butterfly', 'bee', 'ant', 'spider', 'snake', 'lizard',
      'frog', 'turtle', 'fish', 'shark', 'whale', 'dolphin', 'octopus', 'crab', 'lobster', 'shrimp',
      'mouse', 'rat', 'hamster', 'guinea pig', 'ferret', 'monkey', 'gorilla', 'chimpanzee', 'orangutan', 'koala',
      'kangaroo', 'zebra', 'giraffe', 'hippo', 'rhino', 'crocodile', 'alligator', 'dinosaur', 'dragon', 'unicorn',
      // More complex nouns
      'adventure', 'mystery', 'secret', 'treasure', 'legend', 'myth', 'story', 'novel', 'poem', 'song',
      'dance', 'music', 'art', 'science', 'mathematics', 'history', 'geography', 'philosophy', 'psychology', 'biology',
      'chemistry', 'physics', 'astronomy', 'geology', 'medicine', 'surgery', 'therapy', 'exercise', 'sport', 'competition',
      'tournament', 'championship', 'victory', 'defeat', 'challenge', 'obstacle', 'solution', 'problem', 'question', 'answer',
      'idea', 'thought', 'dream', 'nightmare', 'memory', 'experience', 'emotion', 'feeling', 'sensation', 'perception',
      'consciousness', 'intelligence', 'wisdom', 'knowledge', 'information', 'data', 'statistics', 'research', 'experiment', 'discovery',
      'invention', 'innovation', 'technology', 'machine', 'engine', 'motor', 'generator', 'battery', 'circuit', 'wire',
      'cable', 'antenna', 'signal', 'frequency', 'wavelength', 'radiation', 'energy', 'power', 'electricity', 'magnetism',
      'gravity', 'force', 'pressure', 'temperature', 'heat', 'cold', 'fire', 'ice', 'steam', 'smoke',
      'cloud', 'rain', 'snow', 'storm', 'thunder', 'lightning', 'rainbow', 'sunshine', 'shadow', 'darkness',
      'light', 'color', 'sound', 'noise', 'silence', 'voice', 'whisper', 'scream', 'laugh', 'cry',
      'smile', 'frown', 'tear', 'sweat', 'blood', 'heart', 'brain', 'mind', 'soul', 'spirit',
      'body', 'hand', 'finger', 'arm', 'leg', 'foot', 'head', 'face', 'eye', 'ear',
      'nose', 'mouth', 'tooth', 'tongue', 'hair', 'skin', 'bone', 'muscle', 'nerve', 'organ',
      'breath', 'pulse', 'rhythm', 'beat', 'melody', 'harmony', 'symphony', 'orchestra', 'band', 'choir',
      'audience', 'crowd', 'group', 'team', 'family', 'friend', 'enemy', 'stranger', 'neighbor', 'community',
      'society', 'culture', 'tradition', 'custom', 'habit', 'routine', 'schedule', 'appointment', 'meeting', 'conference',
      'presentation', 'speech', 'lecture', 'lesson', 'class', 'course', 'degree', 'certificate', 'diploma', 'award',
      'prize', 'gift', 'present', 'surprise', 'party', 'celebration', 'festival', 'holiday', 'vacation', 'journey',
      'trip', 'voyage', 'expedition', 'quest', 'mission', 'purpose', 'goal', 'target', 'objective', 'plan',
      'strategy', 'tactic', 'method', 'technique', 'skill', 'talent', 'ability', 'capacity', 'potential', 'opportunity',
      'chance', 'luck', 'fortune', 'destiny', 'fate', 'future', 'past', 'present', 'moment', 'instant',
      'second', 'minute', 'hour', 'day', 'week', 'month', 'year', 'decade', 'century', 'millennium',
      'universe', 'galaxy', 'star', 'planet', 'moon', 'sun', 'earth', 'sky', 'space', 'atmosphere'
    ],
    verbs: [
      // Basic verbs
      'run', 'walk', 'jump', 'hop', 'skip', 'dance', 'sing', 'talk', 'speak', 'whisper',
      'shout', 'scream', 'laugh', 'cry', 'smile', 'frown', 'think', 'dream', 'sleep', 'wake',
      'eat', 'drink', 'cook', 'bake', 'fry', 'boil', 'mix', 'stir', 'chop', 'slice',
      'cut', 'tear', 'break', 'fix', 'repair', 'build', 'create', 'make', 'craft', 'design',
      'draw', 'paint', 'write', 'read', 'study', 'learn', 'teach', 'explain', 'understand', 'remember',
      'forget', 'ignore', 'notice', 'see', 'look', 'watch', 'observe', 'hear', 'listen', 'smell',
      'taste', 'touch', 'feel', 'hold', 'grab', 'catch', 'throw', 'toss', 'drop', 'pick',
      'lift', 'carry', 'pull', 'push', 'drag', 'slide', 'roll', 'spin', 'turn', 'twist',
      'bend', 'stretch', 'reach', 'point', 'wave', 'clap', 'snap', 'knock', 'hit', 'punch',
      'kick', 'stomp', 'step', 'climb', 'crawl', 'swim', 'dive', 'float', 'fly', 'soar',
      'fall', 'rise', 'stand', 'sit', 'lie', 'rest', 'relax', 'breathe', 'inhale', 'exhale',
      'cough', 'sneeze', 'yawn', 'stretch', 'exercise', 'workout', 'train', 'practice', 'rehearse', 'perform',
      'play', 'compete', 'win', 'lose', 'try', 'attempt', 'succeed', 'fail', 'give', 'take',
      'receive', 'accept', 'reject', 'refuse', 'deny', 'admit', 'confess', 'hide', 'reveal', 'show',
      'display', 'present', 'introduce', 'meet', 'greet', 'welcome', 'invite', 'visit', 'stay', 'leave',
      'go', 'come', 'arrive', 'depart', 'travel', 'move', 'shift', 'change', 'transform', 'become',
      'grow', 'shrink', 'expand', 'contract', 'open', 'close', 'lock', 'unlock', 'start', 'begin',
      'finish', 'end', 'stop', 'pause', 'continue', 'proceed', 'advance', 'retreat', 'return', 'repeat',
      'copy', 'imitate', 'follow', 'lead', 'guide', 'direct', 'control', 'manage', 'organize', 'arrange',
      'sort', 'group', 'separate', 'divide', 'unite', 'join', 'connect', 'attach', 'detach', 'remove',
      // More sophisticated verbs
      'accelerate', 'decelerate', 'navigate', 'calculate', 'estimate', 'measure', 'weigh', 'count', 'analyze', 'examine',
      'investigate', 'research', 'discover', 'explore', 'experiment', 'test', 'prove', 'demonstrate', 'illustrate', 'clarify',
      'simplify', 'complicate', 'confuse', 'puzzle', 'solve', 'resolve', 'decide', 'choose', 'select', 'prefer',
      'recommend', 'suggest', 'propose', 'offer', 'provide', 'supply', 'deliver', 'transport', 'transfer', 'exchange',
      'trade', 'sell', 'buy', 'purchase', 'acquire', 'obtain', 'gain', 'earn', 'deserve', 'merit',
      'achieve', 'accomplish', 'complete', 'fulfill', 'satisfy', 'please', 'delight', 'amuse', 'entertain', 'bore',
      'tire', 'exhaust', 'energize', 'motivate', 'inspire', 'encourage', 'discourage', 'frighten', 'scare', 'terrify',
      'comfort', 'console', 'support', 'help', 'assist', 'aid', 'rescue', 'save', 'protect', 'defend',
      'attack', 'assault', 'threaten', 'warn', 'alert', 'notify', 'inform', 'communicate', 'broadcast', 'announce',
      'declare', 'proclaim', 'state', 'claim', 'assert', 'argue', 'debate', 'discuss', 'negotiate', 'bargain',
      'compromise', 'agree', 'disagree', 'oppose', 'resist', 'submit', 'surrender', 'yield', 'permit', 'allow',
      'forbid', 'prohibit', 'ban', 'restrict', 'limit', 'extend', 'expand', 'increase', 'decrease', 'reduce',
      'minimize', 'maximize', 'optimize', 'improve', 'enhance', 'upgrade', 'downgrade', 'deteriorate', 'damage', 'harm',
      'heal', 'cure', 'treat', 'diagnose', 'prescribe', 'recommend', 'advise', 'counsel', 'guide', 'mentor',
      'coach', 'train', 'educate', 'instruct', 'direct', 'supervise', 'monitor', 'observe', 'survey', 'inspect',
      'evaluate', 'assess', 'judge', 'criticize', 'praise', 'compliment', 'flatter', 'insult', 'offend', 'apologize',
      'forgive', 'excuse', 'pardon', 'blame', 'accuse', 'suspect', 'doubt', 'trust', 'believe', 'hope',
      'wish', 'desire', 'want', 'need', 'require', 'demand', 'request', 'ask', 'question', 'answer',
      'respond', 'reply', 'react', 'behave', 'act', 'pretend', 'fake', 'imitate', 'copy', 'reproduce',
      'generate', 'produce', 'manufacture', 'construct', 'assemble', 'disassemble', 'destroy', 'demolish', 'ruin', 'spoil'
    ],
    adjectives: [
      // Common adjectives
      'big', 'small', 'large', 'tiny', 'huge', 'enormous', 'massive', 'gigantic', 'miniature', 'microscopic',
      'tall', 'short', 'high', 'low', 'deep', 'shallow', 'thick', 'thin', 'wide', 'narrow',
      'long', 'brief', 'quick', 'fast', 'slow', 'rapid', 'swift', 'sluggish', 'speedy', 'leisurely',
      'hot', 'cold', 'warm', 'cool', 'freezing', 'boiling', 'burning', 'icy', 'frosty', 'chilly',
      'bright', 'dark', 'light', 'dim', 'brilliant', 'dull', 'shiny', 'glossy', 'matte', 'transparent',
      'clear', 'cloudy', 'foggy', 'hazy', 'blurry', 'sharp', 'fuzzy', 'smooth', 'rough', 'bumpy',
      'soft', 'hard', 'gentle', 'harsh', 'tender', 'tough', 'strong', 'weak', 'powerful', 'fragile',
      'solid', 'liquid', 'gaseous', 'heavy', 'light', 'dense', 'sparse', 'thick', 'thin', 'fat',
      'skinny', 'lean', 'plump', 'round', 'square', 'triangular', 'circular', 'oval', 'rectangular', 'curved',
      'straight', 'crooked', 'bent', 'twisted', 'flat', 'steep', 'slanted', 'vertical', 'horizontal', 'diagonal',
      'new', 'old', 'young', 'ancient', 'modern', 'contemporary', 'vintage', 'antique', 'fresh', 'stale',
      'clean', 'dirty', 'pure', 'contaminated', 'spotless', 'filthy', 'neat', 'messy', 'organized', 'chaotic',
      'beautiful', 'ugly', 'pretty', 'handsome', 'attractive', 'repulsive', 'gorgeous', 'hideous', 'stunning', 'plain',
      'colorful', 'colorless', 'vibrant', 'pale', 'vivid', 'faded', 'bright', 'dark', 'neon', 'pastel',
      'red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown', 'black', 'white',
      'gray', 'silver', 'gold', 'bronze', 'metallic', 'wooden', 'plastic', 'glass', 'ceramic', 'fabric',
      'happy', 'sad', 'joyful', 'miserable', 'cheerful', 'gloomy', 'excited', 'bored', 'enthusiastic', 'apathetic',
      'angry', 'calm', 'furious', 'peaceful', 'mad', 'serene', 'irritated', 'relaxed', 'annoyed', 'content',
      'scared', 'brave', 'frightened', 'courageous', 'terrified', 'fearless', 'nervous', 'confident', 'anxious', 'assured',
      'surprised', 'expected', 'shocked', 'prepared', 'amazed', 'bored', 'interested', 'curious', 'indifferent', 'fascinated',
      // More descriptive adjectives
      'mysterious', 'obvious', 'secret', 'public', 'private', 'personal', 'professional', 'casual', 'formal', 'informal',
      'serious', 'funny', 'hilarious', 'boring', 'entertaining', 'amusing', 'dull', 'exciting', 'thrilling', 'mundane',
      'spectacular', 'ordinary', 'extraordinary', 'normal', 'unusual', 'strange', 'weird', 'bizarre', 'odd', 'typical',
      'unique', 'common', 'rare', 'frequent', 'occasional', 'constant', 'continuous', 'intermittent', 'regular', 'irregular',
      'perfect', 'flawed', 'excellent', 'terrible', 'outstanding', 'mediocre', 'superior', 'inferior', 'premium', 'cheap',
      'expensive', 'affordable', 'costly', 'valuable', 'worthless', 'precious', 'priceless', 'insignificant', 'important', 'trivial',
      'essential', 'unnecessary', 'crucial', 'optional', 'mandatory', 'voluntary', 'required', 'forbidden', 'allowed', 'permitted',
      'legal', 'illegal', 'lawful', 'criminal', 'innocent', 'guilty', 'honest', 'dishonest', 'truthful', 'deceptive',
      'reliable', 'unreliable', 'dependable', 'unpredictable', 'consistent', 'inconsistent', 'stable', 'unstable', 'steady', 'shaky',
      'flexible', 'rigid', 'adaptable', 'stubborn', 'cooperative', 'uncooperative', 'helpful', 'unhelpful', 'supportive', 'hostile',
      'friendly', 'unfriendly', 'kind', 'cruel', 'generous', 'selfish', 'thoughtful', 'thoughtless', 'considerate', 'inconsiderate',
      'polite', 'rude', 'respectful', 'disrespectful', 'patient', 'impatient', 'tolerant', 'intolerant', 'understanding', 'judgmental',
      'wise', 'foolish', 'intelligent', 'stupid', 'smart', 'dumb', 'clever', 'naive', 'brilliant', 'ignorant',
      'educated', 'uneducated', 'knowledgeable', 'clueless', 'experienced', 'inexperienced', 'skilled', 'unskilled', 'talented', 'untalented',
      'creative', 'uncreative', 'artistic', 'practical', 'imaginative', 'realistic', 'innovative', 'traditional', 'original', 'copied',
      'authentic', 'fake', 'genuine', 'artificial', 'natural', 'synthetic', 'organic', 'processed', 'fresh', 'preserved',
      'healthy', 'unhealthy', 'nutritious', 'junk', 'beneficial', 'harmful', 'safe', 'dangerous', 'secure', 'risky',
      'comfortable', 'uncomfortable', 'cozy', 'cramped', 'spacious', 'crowded', 'roomy', 'tight', 'loose', 'snug',
      'convenient', 'inconvenient', 'easy', 'difficult', 'simple', 'complex', 'complicated', 'straightforward', 'clear', 'confusing'
    ]
  };

  // Combine all words into one array
  const getAllWords = () => {
    return [...wordBank.nouns, ...wordBank.verbs, ...wordBank.adjectives];
  };

  // Movie genres for dialogue prompt
  const movieGenres = [
    'Comedy', 'Horror', 'Sci-Fi', 'Romance', 'Western', 'Action', 'Drama', 
    'Thriller', 'Fantasy', 'Mystery', 'Musical', 'Documentary', 'Film Noir', 
    'Superhero', 'Animated'
  ];

  // Shuffle function
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Warmup round (always round 1)
  const warmupRound = {
    id: 'warmup',
    prompt: "Think of a different word or words that mean the same thing or something similar",
    wordInterval: 5000,
    isWarmup: true
  };

  // Prompt bank for rounds 2-7 (randomly select 6 from this bank each game)
  const promptBank = [
    {
      id: 'opposites',
      prompt: "Think of a word or words that mean the opposite of the word above",
      wordInterval: 5000
    },
    {
      id: 'rhyming',
      prompt: "Think of as many rhyming words as you can think of, aim for at least three per word",
      wordInterval: 10000
    },
    {
      id: 'invention',
      prompt: "Use this word while describing a new invention",
      wordInterval: 15000
    },
    {
      id: 'story-beginning',
      prompt: "Create a short sentence or story using the word above. Cite 1 or more specific characters, and 1 or more specific actions.",
      example: '"End" = "I never thought Erin and I would end up learning to Jet Ski on our honeymoon."',
      wordInterval: 15000
    },
    {
      id: 'emotions',
      prompt: "What emotions or feelings does this word evoke? Once you have the emotions, express them through silent gestures, postures, physical actions, or facial expressions.",
      example: '"Mountain" = Awe, wonder, determination → Stand tall, gaze upward with wide eyes, take a deep breath and raise arms toward the sky',
      wordInterval: 10000
    },
    {
      id: 'story-ending',
      prompt: "Create the last line in a short sentence or story using the word above. Cite 1 or more specific characters, and 1 or more specific actions.",
      example: '"End" = "I never thought Erin would end up leaving me for the Jet Ski instructor."',
      wordInterval: 15000
    },
    {
      id: 'apocalypse',
      prompt: "The world is about to end and the key to saving the planet is this word. Please explain why.",
      example: '"Spoon" = "The alien invaders can only be defeated by the precise vibration frequency created when you tap a metal spoon against a ceramic bowl - it disrupts their communication system."',
      wordInterval: 15000
    },
    {
      id: 'dialogue',
      prompt: "Recite two lines of dialogue inspired by the word above in the style of the film genre listed here.",
      example: 'WORD: "telescope" / GENRE: "Horror" = "Did you see that thing moving in the telescope?" "Whatever you do, don\'t look through it again."',
      wordInterval: 15000
    }
  ];

  // Encouraging messages
  const encouragingMessages = [
    "Great job! Keep the creativity flowing!",
    "You're doing amazing! Let's keep going!",
    "Fantastic work! Your imagination is on fire!",
    "Excellent! You're really getting into the groove!",
    "It's okay if you didn't get them all - you're improving!",
    "Wonderful creativity! Ready for the next challenge?",
    "You're building those improv muscles! Keep it up!",
    "Impressive thinking! Let's continue the journey!",
    "Your quick thinking is getting sharper!",
    "Amazing effort! Every round makes you better!",
    "You're becoming an improv master! One more round!",
    "Brilliant work! Time for the final challenge!"
  ];

  // State management
  const [gameState, setGameState] = useState('start'); // 'start', 'playing', 'between-rounds', 'instructions', 'completed'
  const [currentRoundIndex, setCurrentRoundIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState('');
  const [currentGenre, setCurrentGenre] = useState('');
  const [timeLeft, setTimeLeft] = useState(60);
  const [roundOrder, setRoundOrder] = useState([]);
  const [wordPool, setWordPool] = useState([]);
  const [wordIndex, setWordIndex] = useState(0);
  const [pendingRound, setPendingRound] = useState(null); // For rounds that need instruction screens

  // Refs for timer management
  const roundTimerRef = useRef(null);
  const wordTimerRef = useRef(null);
  const wordPoolRef = useRef([]);
  const wordIndexRef = useRef(0);
  const genrePoolRef = useRef([]);
  const genreIndexRef = useRef(0);

  // Initialize word pool
  const initializeWordPool = () => {
    const allWords = getAllWords();
    const shuffledWords = shuffleArray(allWords);
    wordPoolRef.current = shuffledWords;
    wordIndexRef.current = 0;
    setWordPool(shuffledWords);
    setWordIndex(0);
    
    // Initialize genre pool
    const shuffledGenres = shuffleArray([...movieGenres]);
    genrePoolRef.current = shuffledGenres;
    genreIndexRef.current = 0;
  };

  // Get next word from pool
  const getNextWord = () => {
    if (wordIndexRef.current >= wordPoolRef.current.length) {
      // Reshuffle when pool is exhausted
      const allWords = getAllWords();
      const shuffledWords = shuffleArray(allWords);
      wordPoolRef.current = shuffledWords;
      wordIndexRef.current = 0;
    }
    
    const word = wordPoolRef.current[wordIndexRef.current];
    wordIndexRef.current += 1;
    setWordIndex(wordIndexRef.current);
    return word;
  };

  // Get next genre from pool
  const getNextGenre = () => {
    if (genreIndexRef.current >= genrePoolRef.current.length) {
      // Reshuffle when pool is exhausted
      const shuffledGenres = shuffleArray([...movieGenres]);
      genrePoolRef.current = shuffledGenres;
      genreIndexRef.current = 0;
    }
    
    const genre = genrePoolRef.current[genreIndexRef.current];
    genreIndexRef.current += 1;
    return genre;
  };

  // Start new game
  const startNewGame = () => {
    // Initialize word pool
    initializeWordPool();
    
    // Create round order: warmup first, then 6 randomly selected prompts from bank
    const selectedPrompts = shuffleArray([...promptBank]).slice(0, 6);
    const newRoundOrder = [warmupRound, ...selectedPrompts];
    
    console.log('Selected prompts:', selectedPrompts.map(p => p.id)); // Debug log
    
    setRoundOrder(newRoundOrder);
    setCurrentRoundIndex(0);
    
    // Check if first round needs instructions
    if (newRoundOrder[0].example) {
      setPendingRound(newRoundOrder[0]);
      setGameState('instructions');
    } else {
      setGameState('playing');
      startRound(newRoundOrder[0]);
    }
  };

  // Start a round
  const startRound = (roundConfig) => {
    setTimeLeft(60);
    setCurrentWord(getNextWord());
    
    // Set genre if this is the dialogue prompt
    if (roundConfig.id === 'dialogue') {
      setCurrentGenre(getNextGenre());
    } else {
      setCurrentGenre('');
    }
    
    // Clear any existing timers
    if (roundTimerRef.current) clearInterval(roundTimerRef.current);
    if (wordTimerRef.current) clearInterval(wordTimerRef.current);
    
    // Start round timer (60 seconds)
    roundTimerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          // Don't clear timers here, let endRound handle it
          endRound();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    // Start word change timer
    wordTimerRef.current = setInterval(() => {
      setCurrentWord(getNextWord());
      // Also change genre for dialogue prompt
      if (roundConfig.id === 'dialogue') {
        setCurrentGenre(getNextGenre());
      }
    }, roundConfig.wordInterval);
  };

  // End current round
  const endRound = () => {
    // Clear timers first
    if (roundTimerRef.current) {
      clearInterval(roundTimerRef.current);
      roundTimerRef.current = null;
    }
    if (wordTimerRef.current) {
      clearInterval(wordTimerRef.current);
      wordTimerRef.current = null;
    }
    
    // Check if this was the last round (index 6 for 7 rounds total)
    if (currentRoundIndex >= 6) {
      // Game completed
      setGameState('completed');
    } else {
      // Move to between rounds
      setGameState('between-rounds');
    }
  };

  // Continue to next round
  const continueToNextRound = () => {
    const nextIndex = currentRoundIndex + 1;
    setCurrentRoundIndex(nextIndex);
    const nextRound = roundOrder[nextIndex];
    
    // Check if this round needs an instruction screen (rounds with examples)
    if (nextRound.example) {
      setPendingRound(nextRound);
      setGameState('instructions');
    } else {
      setGameState('playing');
      startRound(nextRound);
    }
  };

  // Start round from instruction screen
  const startRoundFromInstructions = () => {
    setGameState('playing');
    startRound(pendingRound);
    setPendingRound(null);
  };

  // Reset game
  const resetGame = () => {
    if (roundTimerRef.current) clearInterval(roundTimerRef.current);
    if (wordTimerRef.current) clearInterval(wordTimerRef.current);
    setGameState('start');
    setCurrentRoundIndex(0);
    setCurrentWord('');
    setCurrentGenre('');
    setTimeLeft(60);
    setRoundOrder([]);
    setPendingRound(null);
  };

  // Cleanup timers on unmount
  useEffect(() => {
    return () => {
      if (roundTimerRef.current) clearInterval(roundTimerRef.current);
      if (wordTimerRef.current) clearInterval(wordTimerRef.current);
    };
  }, []);

  // Helper function to get seconds per word display
  const getSecondsPerWord = (interval) => {
    return interval / 1000;
  };

  // Helper function to get words per round
  const getWordsPerRound = (interval) => {
    return 60 / (interval / 1000);
  };

  // Render different game states
  if (gameState === 'start') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Daily Seven Minute Improv Workout</h1>
          <div className="text-left text-gray-600 mb-8 space-y-4">
            <p><strong>Get ready for 7 rounds of creative thinking!</strong></p>
            <p>• Each round lasts exactly 60 seconds</p>
            <p>• Words change at different intervals during each round</p>
            <p>• Round 1 is always the warm-up, rounds 2-7 are randomly selected from the prompt bank</p>
            <p>• Over 1000 unique words to keep you challenged</p>
            <p>• Practice thinking quickly and creatively on your feet</p>
            <p><strong>Perfect for improv actors, comedians, and anyone wanting to boost their creativity!</strong></p>
          </div>
          <button
            onClick={startNewGame}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl text-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Start Practice
          </button>
        </div>
      </div>
    );
  }

  if (gameState === 'playing') {
    const currentRound = roundOrder[currentRoundIndex];
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full text-center">
          <div className="mb-6">
            <div className="text-lg font-semibold text-gray-600 mb-4">
              Round {currentRoundIndex + 1}/7 • 60 seconds • {getSecondsPerWord(currentRound.wordInterval)}s per word
            </div>
          </div>
          
          <div className="mb-8">
            <div className="text-6xl font-bold text-gray-800 mb-6 min-h-[80px] flex items-center justify-center">
              {currentWord}
            </div>
            {currentGenre && (
              <div className="text-4xl font-semibold text-purple-600 mb-4">
                Genre: {currentGenre}
              </div>
            )}
            <div className="text-xl text-gray-700 px-4">
              {currentRound.prompt}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (gameState === 'instructions') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-3xl w-full text-center">
          <div className="text-3xl font-bold text-gray-800 mb-6">
            Round {currentRoundIndex + 1}/7 - Instructions
          </div>
          
          <div className="text-left text-gray-700 mb-8 space-y-6">
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Your Task:</h3>
              <p className="text-lg text-blue-700">{pendingRound.prompt}</p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-green-800 mb-3">Example:</h3>
              <p className="text-lg text-green-700">{pendingRound.example}</p>
            </div>
            
            <div className="bg-yellow-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-yellow-800 mb-3">Remember:</h3>
              <ul className="text-lg text-yellow-700 space-y-2">
                <li>• You'll have 60 seconds total</li>
                <li>• Words change every {getSecondsPerWord(pendingRound.wordInterval)} seconds</li>
                <li>• Include specific characters and actions</li>
                <li>• Have fun and be creative!</li>
              </ul>
            </div>
          </div>
          
          <button
            onClick={startRoundFromInstructions}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl text-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Begin Round {currentRoundIndex + 1}
          </button>
        </div>
      </div>
    );
  }

  if (gameState === 'between-rounds') {
    const messageIndex = Math.min(currentRoundIndex, encouragingMessages.length - 1);
    
    // Check if this was the final round (round 7, index 6)
    if (currentRoundIndex >= 6) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full text-center">
            <div className="text-4xl font-bold text-gray-800 mb-6">
              🎉 Congratulations! 🎉
            </div>
            <div className="text-xl text-gray-600 mb-8">
              You've completed all 7 rounds of improv practice! Your creativity and quick thinking have been amazing!
            </div>
            <button
              onClick={startNewGame}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl text-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Play Again
            </button>
          </div>
        </div>
      );
    }
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full text-center">
          <div className="text-3xl font-bold text-gray-800 mb-6">
            Round {currentRoundIndex + 1} Complete!
          </div>
          <div className="text-xl text-gray-600 mb-8">
            {encouragingMessages[messageIndex]}
          </div>
          <button
            onClick={continueToNextRound}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl text-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Next Round
          </button>
        </div>
      </div>
    );
  }

  if (gameState === 'completed') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full text-center">
          <div className="text-4xl font-bold text-gray-800 mb-6">
            🎉 Congratulations! 🎉
          </div>
          <div className="text-xl text-gray-600 mb-8">
            You've completed all 7 rounds of improv practice! Your creativity and quick thinking have been amazing!
          </div>
          <button
            onClick={startNewGame}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl text-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Play Again
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default ImprovPracticeApp;
