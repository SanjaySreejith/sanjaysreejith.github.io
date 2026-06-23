const COURSES = [
  {
    tag: 'MATH 142',
    name: 'Calculus II',
    desc: 'The course that breaks the most students in the sequence, mostly because it\'s three different topics stitched together. We build a decision framework for integration techniques and spend serious time on series convergence — the part that shows up on every exam.',
    topics: ['Integration techniques', 'U-substitution', 'Integration by parts', 'Sequences', 'Series convergence', 'Taylor series'],
    sessions: 'Mon & Wed · Baker Science · $15/session'
  },
  {
    tag: 'MATH 143',
    name: 'Calculus III',
    desc: 'Multivariable calculus is mostly Calc I and II ideas extended into three dimensions — once the geometric intuition is there, the algebra follows. We spend the first session entirely on getting comfortable in 3D before touching any calculus.',
    topics: ['Vectors', 'Partial derivatives', 'Gradient', 'Double & triple integrals', 'Green\'s theorem', 'Stokes\' theorem'],
    sessions: 'Tue & Thu · Baker Science · $15/session'
  },
  {
    tag: 'MATH 206',
    name: 'Linear Algebra I',
    desc: 'The key shift from calculus: you\'re no longer doing things to functions, you\'re finding them from relationships. We build a clear taxonomy early — which method applies to which type of equation — so you\'re never staring at a problem with no idea where to start.',
    topics: ['First-order ODEs', 'Second-order linear', 'Systems of ODEs', 'Laplace transforms', 'Phase portraits'],
    sessions: 'Mon & Wed · Baker Science · $15/session'
  },
  {
    tag: 'MATH 221',
    name: 'Calculus for Business and Economics',
    desc: 'The key shift from calculus: you\'re no longer doing things to functions, you\'re finding them from relationships. We build a clear taxonomy early — which method applies to which type of equation — so you\'re never staring at a problem with no idea where to start.',
    topics: ['First-order ODEs', 'Second-order linear', 'Systems of ODEs', 'Laplace transforms', 'Phase portraits'],
    sessions: 'Mon & Wed · Baker Science · $15/session'
  },
  {
    tag: 'MATH 241',
    name: 'Calculus IV',
    desc: 'Multivariable calculus is mostly Calc I and II ideas extended into three dimensions — once the geometric intuition is there, the algebra follows. We spend the first session entirely on getting comfortable in 3D before touching any calculus.',
    topics: ['Vectors', 'Partial derivatives', 'Gradient', 'Double & triple integrals', 'Green\'s theorem', 'Stokes\' theorem'],
    sessions: 'Tue & Thu · Baker Science · $15/session'
  },
  {
    tag: 'MATH 244',
    name: 'Linear Analysis I',
    desc: 'The most geometric course in the sequence and the one where mechanical competence diverges most sharply from real understanding. Every session leads with the geometric picture before touching a matrix — students who can visualize transformations find the algebra nearly obvious.',
    topics: ['Vector spaces', 'Linear transformations', 'Eigenvalues & eigenvectors', 'Determinants', 'Subspaces', 'Gram-Schmidt'],
    sessions: 'Tue & Thu · Baker Science · $15/session'
  },
  {
    tag: 'MATH 248',
    name: 'Methods of Proof in Mathematics',
    desc: 'The key shift from calculus: you\'re no longer doing things to functions, you\'re finding them from relationships. We build a clear taxonomy early — which method applies to which type of equation — so you\'re never staring at a problem with no idea where to start.',
    topics: ['First-order ODEs', 'Second-order linear', 'Systems of ODEs', 'Laplace transforms', 'Phase portraits'],
    sessions: 'Mon & Wed · Baker Science · $15/session'
  },
  
  {
    tag: 'PHYS 141',
    name: 'Physics I - Mechanics',
    desc: 'Physics I students usually know Newton\'s laws. What they struggle with is setting up problems — translating a physical situation into equations before any solving happens. Every session starts with free body diagrams, every time, no exceptions.',
    topics: ['Kinematics', 'Newton\'s laws', 'Energy conservation', 'Momentum', 'Circular motion', 'Rotational dynamics'],
    sessions: 'Mon & Wed · Baker Science · $15/session'
  },
  {
    tag: 'PHYS 142',
    name: 'Physics II - Waves, Optics & Thermodynamics',
    desc: 'The course where physical intuition from mechanics mostly stops working. We spend the first session building geometric intuition for fields — drawing them, sketching them, understanding them before quantifying them. Gauss\'s law gets a full session of its own.',
    topics: ['Electric fields', 'Gauss\'s law', 'Electric potential', 'Circuits', 'Magnetic fields', 'Faraday\'s law'],
    sessions: 'Tue & Thu · Baker Science · $15/session'
  },
  {
    tag: 'PHYS 143',
    name: 'Physics III - Electricity & Magnetism',
    desc: 'The course where physical intuition from mechanics mostly stops working. We spend the first session building geometric intuition for fields — drawing them, sketching them, understanding them before quantifying them. Gauss\'s law gets a full session of its own.',
    topics: ['Electric fields', 'Gauss\'s law', 'Electric potential', 'Circuits', 'Magnetic fields', 'Faraday\'s law'],
    sessions: 'Tue & Thu · Baker Science · $15/session'
  },
  {
    tag: 'CSC 248',
    name: 'Discrete Structures',
    desc: 'Essentially the CS version of Methods of Proof with combinatorics and graph theory on top. The proof sessions transfer directly — we build a strategy toolkit (direct, contrapositive, contradiction, induction) and drill it through enough examples that it starts feeling instinctive.',
    topics: ['Logic', 'Proof techniques', 'Induction', 'Combinatorics', 'Graph theory', 'Recurrence relations'],
    sessions: 'Mon · Baker Science · $15/session'
  },
];

const container = document.getElementById('accordion');

COURSES.forEach(course => {
  // Build the item element
  const item = document.createElement('div');
  item.className = 'accordion-item';

  item.innerHTML = `
    <div class="accordion-header">
      <span class="accordion-tag">${course.tag}</span>
      <span class="accordion-name">${course.name}</span>
      <span class="accordion-chevron">&#8964;</span>
    </div>
    <div class="accordion-body">
      <div class="accordion-content">
        <p class="accordion-desc">${course.desc}</p>
        <div class="topic-list">
          ${course.topics.map(t => `<span class="topic">${t}</span>`).join('')}
        </div>
        <div class="accordion-meta">
          <span>${course.sessions}</span>
        </div>
      </div>
    </div>
  `;

  // Toggle open/closed when the header is clicked
  item.querySelector('.accordion-header').addEventListener('click', () => {
    const isOpen = item.classList.contains('open');

    // Close everything else first
    document.querySelectorAll('.accordion-item.open').forEach(el => {
      el.classList.remove('open');
    });

    // Then open this one (unless it was already open)
    if (!isOpen) item.classList.add('open');
  });

  container.appendChild(item);
});