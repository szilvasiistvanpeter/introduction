import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Contacts from './Contacts';
import { describe, it, expect, beforeEach, vi } from 'vitest'; // Import Vitest utilities

vi.mock('../const', () => ({
  contactLinks: [
    {
      value: 'Email',
      href: 'mailto:test@example.com',
      icon: <span data-testid="mock-email-icon" />,
    },
    {
      value: 'LinkedIn',
      href: 'https://linkedin.com/in/test',
      icon: <span data-testid="mock-linkedin-icon" />,
    },
  ],
}));

describe('Contacts Component', () => {
  beforeEach(() => {
    document.title = '';
  });

  it('updates the document title to "Kapcsolat" on mount', () => {
    render(<Contacts />);
    expect(document.title).toBe('Kapcsolat');
  });

  it('renders the main headings and descriptions', () => {
    render(<Contacts />);

    expect(screen.getByText('Lépjünk kapcsolatba!')).toBeInTheDocument();
    expect(
      screen.getByText(
        /Legyen szó szakmai projektről, oktatásról vagy csak egy kávéról Egerben\./i
      )
    ).toBeInTheDocument();
  });

  it('renders all contact links from the mocked constants', () => {
    render(<Contacts />);

    const emailLink = screen.getByText('Email');
    const linkedinLink = screen.getByText('LinkedIn');

    expect(emailLink).toBeInTheDocument();
    expect(linkedinLink).toBeInTheDocument();

    expect(emailLink.closest('a')).toHaveAttribute(
      'href',
      'mailto:test@example.com'
    );
    expect(emailLink.closest('a')).toHaveAttribute('target', '_blank');

    expect(linkedinLink.closest('a')).toHaveAttribute(
      'href',
      'https://linkedin.com/in/test'
    );
    expect(linkedinLink.closest('a')).toHaveAttribute('target', '_blank');
  });

  it('renders the mocked icons for the contact links', () => {
    render(<Contacts />);

    expect(screen.getByTestId('mock-email-icon')).toBeInTheDocument();
    expect(screen.getByTestId('mock-linkedin-icon')).toBeInTheDocument();
  });

  it('renders the location information block', () => {
    render(<Contacts />);

    expect(screen.getByText('Eger')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Itt születtem, itt élek, és innen dolgozom Senior fejlesztőként.'
      )
    ).toBeInTheDocument();
  });
});
