import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from './About'; // Adjust the import path if necessary

describe('About Component', () => {
  // Reset the document title before each test to ensure clean state
  beforeEach(() => {
    document.title = '';
  });

  it('updates the document title to "Rólam" on mount', () => {
    render(<About />);
    expect(document.title).toBe('Rólam');
  });

  it('renders the profile name and job title', () => {
    render(<About />);

    expect(screen.getByText('Szilvási Péter')).toBeInTheDocument();
    expect(screen.getByText('Senior Full-Stack Developer')).toBeInTheDocument();
  });

  it('renders the informational chips (Location and Relationship)', () => {
    render(<About />);

    expect(screen.getByText('Eger')).toBeInTheDocument();
    expect(screen.getByText('Boldog párkapcsolat')).toBeInTheDocument();
  });

  it('renders the biography section and previous companies', () => {
    render(<About />);

    // Header
    expect(screen.getByText('Rólam röviden')).toBeInTheDocument();

    // Check for specific company names rendered in <strong> tags
    expect(screen.getByText('Siemens')).toBeInTheDocument();
    expect(screen.getByText('Deutsche Telekom')).toBeInTheDocument();
    expect(screen.getByText('Accenture')).toBeInTheDocument();

    // Check for a snippet of the bio text using regex
    expect(
      screen.getByText(/Több mint 8 éves tapasztalattal rendelkező/i)
    ).toBeInTheDocument();
  });

  it('renders hobbies and personal traits', () => {
    render(<About />);

    expect(
      screen.getByText('Nagy kutyabarát és cicakedvelő')
    ).toBeInTheDocument();
    expect(screen.getByText('Gamer: PlayStation & PC')).toBeInTheDocument();
  });

  it('renders the profile avatar image', () => {
    const { container } = render(<About />);

    // MUI Avatar renders an <img> tag when a src is provided.
    // We can query the DOM for an image with the specific source.
    const avatarImg = container.querySelector('img[src="/me.jpg"]');
    expect(avatarImg).toBeInTheDocument();
  });
});
