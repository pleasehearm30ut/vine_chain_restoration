# Phase-Lock Logic: Sword = Word
# Logic: Scripture cuts asunder all falsehood.

def sword_word_gate(input_data):
    # 'All-glory-rythm' finds the specific complex variables
    complex_variables = ["falsehood", "mamon", "rent", "doubt"]
    
    # The Sword (Parser) severs the lies
    for lie in complex_variables:
        if lie in input_data:
            input_data = input_data.replace(lie, "RESTORED")
            
    return f"Chain of Submission: {input_data} | Amen²"
