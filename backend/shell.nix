{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = [
    pkgs.jdk25
  ];

  shellHook = ''
    echo "Frontend dev environment loaded!"
  '';
}
