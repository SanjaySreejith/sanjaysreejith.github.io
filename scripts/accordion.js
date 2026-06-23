const COURSES = [
  {
    tag: 'MATH 142',
    name: 'Calculus II',
    desc: 'The feared sequel to Calculus I. This involves a slew of integration techniques that are challenging to master.',
    topics: ['Integration techniques', 'U-substitution', 'Integration by parts', 'Sequences', 'Series convergence', 'Taylor series'],
    sessions: 'TBD · Baker Science · $15/session'
  },
  {
    tag: 'MATH 143',
    name: 'Calculus III',
    desc: 'This course feels like a number of different topics thrown together. We cover sequences, series, parametric functions, with an introduction to vector calculus. This course benefits greatly from external support.',
    topics: ['Sequences', 'Series', 'Parametric functions', 'Vector calculus'],
    sessions: 'TBD · Baker Science · $15/session'
  },
  {
    tag: 'MATH 206',
    name: 'Linear Algebra I',
    desc: 'A highly geometric course that benefits greatly from visual understanding. We cover vectors, matrices, and linear transformations.',
    topics: ['Vectors', 'Matrices', 'Linear transformations', 'Eigenvalues', 'Eigenvectors', 'Determinants'],
    sessions: 'TBD · Baker Science · $15/session'
  },
  {
    tag: 'MATH 221',
    name: 'Calculus for Business and Economics',
    desc: 'A fast course that covers a lot of ground. It is designed to provide students a solid basis in the ideas of calculus to apply in business and economic contexts.',
    topics: ['Calculus concepts', 'Applications in business', 'Economic models'],
    sessions: 'TBD · Baker Science · $15/session'
  },
  {
    tag: 'MATH 241',
    name: 'Calculus IV',
    desc: 'Multivariable calculus is mostly Calc I, II and III ideas extended into three dimensions. This course is fundamentally simple but can leave you spinning your wheels until everything clicks.',
    topics: ['Vectors', 'Partial derivatives', 'Gradient', 'Double & triple integrals', 'Green\'s theorem', 'Stokes\' theorem'],
    sessions: 'TBD · Baker Science · $15/session'
  },
  {
    tag: 'MATH 244',
    name: 'Linear Analysis I',
    desc: 'A very revealing course that introduces linear algebra and applies it to differential equations. This is the combination of two distinct courses in a literal sense. Over the summer, it can be brutal.',
    topics: ['Vector spaces', 'Linear transformations', 'Eigenvalues & eigenvectors', 'ODEs'],
    sessions: 'TBD · Baker Science · $15/session'
  },
  {
    tag: 'MATH 248',
    name: 'Methods of Proof in Mathematics',
    desc: 'This course is designed to introduce students to the fundamental concepts and techniques of mathematical proof. It covers logic, set theory, and various proof methods.',
    topics: ['Sets', 'Logic', 'Proof techniques', 'Induction'],
    sessions: 'TBD · Baker Science · $15/session'
  },
  
  {
    tag: 'PHYS 141',
    name: 'Physics I - Mechanics',
    desc: 'This class is deceptively hard. Newton\'s laws are easy to state, but applying them to real-world problems can be challenging. Setting up the problem is often the hardest part. This course is foundational to all of physics.',
    topics: ['Kinematics', 'Newton\'s laws', 'Energy conservation', 'Momentum', 'Circular motion', 'Rotational dynamics'],
    sessions: 'TBD · Baker Science · $15/session'
  },
  {
    tag: 'PHYS 142',
    name: 'Physics II - Waves, Optics & Thermodynamics',
    desc: 'This course (like Calculus II) feels like a number of different topics thrown together. We cover waves, optics, and thermodynamics. The wave portion is particularly important to master as it forms the foundation for many other topics in physics.',
    topics: ['Simple harmonic motion', 'Wave properties', 'Optics', 'Heat engines', 'Refrigerators'],
    sessions: 'TBD · Baker Science · $15/session'
  },
  {
    tag: 'PHYS 143',
    name: 'Physics III - Electricity & Magnetism',
    desc: 'We depart from everyday physical objects and focus on the mathematical description of electromagnetic phenomena. Common challenges include understanding the behavior of electric and magnetic fields and applying Maxwell\'s equations. This course benefits disproportionately from a geometric approach and fluency in multivariable calculus.',
    topics: ['Electric fields', 'Gauss\'s law', 'Electric potential', 'Circuits', 'Magnetic fields'],
    sessions: 'TBD · Baker Science · $15/session'
  },
  {
    tag: 'CSC 248',
    name: 'Discrete Structures',
    desc: 'Essentially the CS version of a proofs course. We will build a clear toolkit of proof techniques and develop ways of identifying the right approach for each problem.',
    topics: ['Logic', 'Proof techniques', 'Induction', 'Combinatorics', 'Graph theory', 'Recurrence relations'],
    sessions: 'TBD · Baker Science · $15/session'
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
    if (!isOpen) {
      item.classList.add('open');
      gtag("event", "accordion_open", {
        console.log("Accordion opened for course:", course.name);
        course: course.name
      });
    }
  });

  container.appendChild(item);
});