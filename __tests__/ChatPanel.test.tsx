import { render, screen, fireEvent } from '@testing-library/react';
import ChatPanel from '../components/ChatPanel';

describe('ChatPanel', () => {
  it('renders floating chat button', () => {
    render(<ChatPanel />);
    expect(screen.getByLabelText(/open chat/i)).toBeInTheDocument();
  });

  it('opens and closes the chat panel', () => {
    render(<ChatPanel />);
    const button = screen.getByLabelText(/open chat/i);
    fireEvent.click(button);
    expect(screen.getByText(/henry brown/i)).toBeInTheDocument();
    fireEvent.click(button);
    expect(screen.queryByText(/henry brown/i)).not.toBeInTheDocument();
  });
}); 